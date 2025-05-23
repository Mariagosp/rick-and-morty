"use client";

import { useRouter, useSearchParams } from "next/navigation";

export function useUpdateSearchParams() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateSearchParams = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    value ? params.set(key, value) : params.delete(key);
    router.push(`?${params.toString()}`);
  };

  return updateSearchParams;
}