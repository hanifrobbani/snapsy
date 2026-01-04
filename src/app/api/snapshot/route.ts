import { NextResponse } from 'next/server';
import { snapshotErc20 } from '@/services/evm/erc20';

export async function POST(req: Request) {
  const { chainId, contractAddress } = await req.json();

  const data = await snapshotErc20({
    chainId,
    contractAddress,
  });

  return NextResponse.json({
    snapshotId: crypto.randomUUID(),
    holders: data,
  });
}
