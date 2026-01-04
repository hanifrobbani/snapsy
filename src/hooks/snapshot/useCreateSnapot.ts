import { useMutation } from '@tanstack/react-query';
import { createSnapshot } from '@/services/api/snapshot.fetcher';

export function useCreateSnapshot() {
  return useMutation({
    mutationFn: createSnapshot,
  });
}
