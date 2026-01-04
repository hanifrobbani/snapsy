export async function createSnapshot(payload: {
  chainId: number;
  contractAddress: string;
}) {
  const res = await fetch('/api/snapshot', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error('Snapshot failed');
  }

  return res.json();
}
