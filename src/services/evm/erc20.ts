import { parseAbiItem, Address } from 'viem';
import { getPublicClient } from './client';

export async function snapshotErc20({
  chainId,
  contractAddress,
}: {
  chainId: number;
  contractAddress: Address;
}) {
  const client = getPublicClient(chainId);

  const logs = await client.getLogs({
    address: contractAddress,
    event: parseAbiItem(
      'event Transfer(address indexed from, address indexed to, uint256 value)'
    ),
    fromBlock: BigInt(0),
    toBlock: 'latest',
  });

  const balances: Record<Address, bigint> = {};

  for (const log of logs) {
    if (!log.args) continue;

    const { from, to, value } = log.args;

    // Type guards to ensure values are defined
    if (!from || !to || value === undefined) continue;

    if (from !== '0x0000000000000000000000000000000000000000') {
      balances[from] = (balances[from] ?? BigInt(0)) - value;
    }

    balances[to] = (balances[to] ?? BigInt(0)) + value;
  }

  return Object.entries(balances)
    .filter(([, v]) => v > BigInt(0))
    .map(([address, balance]) => ({
      address,
      balance: balance.toString(),
    }));
}