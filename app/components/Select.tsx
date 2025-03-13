"use client";

import { useSearchParams } from "next/navigation";
import { useUpdateSearchParams } from "../utils/updateSearchParams";
import { Select } from "@chakra-ui/react";

type Props = {
  value: string;
  optionArray: string[];
};

const SelectComp: React.FC<Props> = (props) => {
  const { value, optionArray } = props;
  const searchParams = useSearchParams();
  const updateSearchParams = useUpdateSearchParams();

  return (
    <Select
      onChange={(e) => updateSearchParams(value, e.target.value)}
      defaultValue={searchParams.get(value) || ""}
      variant="filled"
      w="150px"
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
    >
      {optionArray.map((option) => (
        <option
          key={option}
          value={
            option === "All" ? "" : option.toLowerCase().replace(/ /g, "_")
          }
        >
          {option}
        </option>
      ))}
    </Select>
  );
};

export default SelectComp;
