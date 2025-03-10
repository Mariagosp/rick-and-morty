'use client'

import { Button } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";

const ResetButton = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleReset = () => {
    const params = new URLSearchParams(searchParams.toString()); 
    params.delete('gender');
    router.push(`?${params.toString()}`);
  };
  return (
    <Button onClick={handleReset} colorScheme="blue" size="sm">
      Reset All
    </Button>
  );
};

export default ResetButton;
