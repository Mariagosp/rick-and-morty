"use client";

import { useSearchParams } from "next/navigation";
import { useUpdateSearchParams } from "../utils/updateSearchParams";
import { Input } from "@chakra-ui/react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { searchSchema } from "../utils/searchShema";

type Props = {
  placeholder: string;
  isCode?: boolean;
};
interface FormData {
  name?: string;
}

const SearchInput: React.FC<Props> = ({ placeholder, isCode }) => {
  const searchParams = useSearchParams();
  const updateSearchParams = useUpdateSearchParams();

  const { control, handleSubmit, setValue } = useForm<FormData>({
    resolver: yupResolver(searchSchema),
    defaultValues: {
      name: searchParams.get(!isCode ? "name" : "episode") || "",
    },
  });

  const onSubmit = (data: FormData) => {
    if (data.name) {
      updateSearchParams(!isCode ? "name" : "episode", data.name);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-4">
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            placeholder={placeholder}
            variant="filled"
            color="black"
            bg="white"
            _focus={{
              color: "white",
              bg: "gray.700",
            }}
            _hover={{
              bg: "gray.200",
              color: "black",
            }}
            w="200px"
            h="41px"
            onChange={(e) => {
              setValue("name", e.target.value);
              updateSearchParams(!isCode ? "name" : "episode", e.target.value);
            }}
          />
        )}
      />
    </form>
  );
};

export default SearchInput;

// <Input
//   placeholder={placeholder}
//   variant="filled"
//   onChange={(e) => updateSearchParams("name", e.target.value)}
//   w="200px"
//   h="41px"
// />

// <input
//   type="text"
//   placeholder={placeholder}
//   value={searchParams.get("name") || ''}
//   onChange={(e) => {
//     updateSearchParams('name', e.target.value);
//   }}
//   className="p-2 border border-gray-500 rounded-md text-black"
// />

// if (isEpisodeCode) {
//   updateSearchParams('episode', e.target.value);
// } else {
//   updateSearchParams('name', e.target.value);
// }

// value={isEpisodeCode ? (
//   searchParams.get("episode") || ''
// ) : (
//     searchParams.get("name") || ''
// )}

// const [query, setQuery] = useState(searchParams.get("name") || "");

// useEffect(() => {
//   const timeout = setTimeout(() => {
//     const params = new URLSearchParams(searchParams.toString());
//     if (query) {
//       params.set("name", query);
//     } else {
//       params.delete("name");
//     }
//     router.push(`/characters?${params.toString()}`);
//   }, 500);

//   return () => clearTimeout(timeout);
// }, [query, router, searchParams]);
