import { createPublicClient, http } from 'viem';
import { mainnet, polygon } from 'viem/chains';

const clients = {
  1: createPublicClient({
    chain: mainnet,
    transport: http(),
  }),
  137: createPublicClient({
    chain: polygon,
    transport: http(),
  }),
};

export function getPublicClient(chainId: number) {
  const client = clients[chainId as keyof typeof clients];
  if (!client) throw new Error('Unsupported chain');
  return client;
}
