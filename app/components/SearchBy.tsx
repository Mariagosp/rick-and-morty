"use client";

import { Button } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import { useState } from "react";

const SearchBy = () => {
  const [searchBy, setSearchBy] = useState<"name" | "episode">("name");
  const handleSearchByChange = (value: "name" | "episode") => {
    setSearchBy(value);
  };
  const isCode: boolean = searchBy === "episode";
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex justify-center gap-4">
          <Button
            className={`px-6 py-2 text-lg font-semibold transition-all duration-300 rounded-lg shadow-md
            ${
              searchBy === "name"
                ? "bg-gray-600 text-white shadow-lg scale-110"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }
          `}
            onClick={() => handleSearchByChange("name")}
          >
            🔍 Search by Name
          </Button>
          <Button
            className={`px-6 py-2 text-lg font-semibold transition-all duration-300 rounded-lg shadow-md
            ${
              searchBy === "episode"
                ? "bg-gray-600 text-white shadow-lg scale-110"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }
          `}
            onClick={() => handleSearchByChange("episode")}
          >
            🎬 Search by Code
          </Button>
        </div>
        <div className="flex flex-col">
          <SearchInput placeholder="Search an episode..." isCode={isCode} />
          <label className="text-gray-400 mt-3 text-center">
            F.e:{" "}
            {isCode ? (
              <span className="text-blue-400">s01e02 / S01E02</span>
            ) : (
              <span className="text-green-400">Pilot</span>
            )}
          </label>
        </div>
      </div>
    </>
  );
};

export default SearchBy;
