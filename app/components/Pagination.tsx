'use client'

import { Button } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  page: number;
  items: {
    count: number,
    pages: number,
    next: string | null,
    prev: string| null,
  };
}

const Pagination: React.FC<Props> = ({ page, items }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const changePage = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage.toString());
    router.push(`?${params.toString()}`);
  }
  return (
    <div className="flex justify-center items-center gap-4 mt-8 mb-10">
      <Button
        onClick={() => changePage(page - 1)}
        isDisabled={page === 1}
        colorScheme="blue"
        variant={"outline"}
      >
        ← 
      </Button>
      <span className="text-white text-lg">{page}</span>
      <Button
        onClick={() => changePage(page + 1)}
        isDisabled={!items || !items.next} 
        colorScheme="blue"
        variant={"outline"}
      >
         →
      </Button>
    </div>
  );
};

export default Pagination;
