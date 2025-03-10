"use client";

import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <Button
      colorScheme="blue"
      variant="outline"
      onClick={() => router.back()}
      className="mb-5"
    >
      ← Back
    </Button>
  );
}
