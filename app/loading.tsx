import { Spinner } from "@chakra-ui/react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <Spinner size="xl" />
    </div>
  );
}
