import { Metadata } from "next";
import CharacterCard from "../components/CharacterCard";
import SearchInput from "../components/SearchInput";
import { Character } from "../types/Character";
import SelectComp from "../components/Select";
import Pagination from "../components/Pagination";
import { CharactersResponse } from "../types/ApiResponse";
import { genderArr, speciesArr, statusArr } from "../utils/optionTypes";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Characters))",
  icons: {
    icon: '/favicon-characters.ico'
  }
};

async function getCharacters(
  name: string,
  status: string,
  gender: string,
  species: string,
  page: number
): Promise<CharactersResponse> {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?name=${name}&status=${status}&gender=${gender}&species=${species}&page=${page}`,
    {
      next: { revalidate: 10 },
    }
  );

  const data = await response.json();

  return data;
}

type PageProps = {
  searchParams: Promise<{
    name?: string;
    status: string;
    gender: string;
    species: string;
    page: number;
  }>;
};

export default async function CharactersPage({
  searchParams,
}: PageProps) {
  const resolvedSearchParams = await searchParams;

  const name = resolvedSearchParams?.name || "";
  const status = resolvedSearchParams?.status || "";
  const gender = resolvedSearchParams?.gender || "";
  const species = resolvedSearchParams.species || "";
  const page = Number(resolvedSearchParams.page) || 1;
  const characters = await getCharacters(name, status, gender, species, page);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon-characters.ico" />
      </Head>
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="pb-7 text-4xl font-bold text-white text-center">
          Characters Page!
        </h1>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 mb-6">
          <div className="flex flex-col">
            <label className="text-white mb-1">Name 🔎</label>
            <SearchInput placeholder="Search a character..." />
          </div>
          <div className="flex flex-col">
            <label className="text-white mb-1">Status 🌱</label>
            <SelectComp value="status" optionArray={statusArr} />
          </div>
          <div className="flex flex-col">
            <label className="text-white mb-1">Gender 👥</label>
            <SelectComp optionArray={genderArr} value="gender" />
          </div>
          <div className="flex flex-col">
            <label className="text-white mb-1">Species 👽</label>
            <SelectComp value="species" optionArray={speciesArr} />
          </div>
        </div>
        {"error" in characters ? (
          <p className="text-center text-xl text-red-500 mt-10">
            Oops! It seems like nobody is here
          </p>
        ) : (
          <div className="w-full p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:grid-cols-4">
              {characters.results.map((character: Character) => (
                <CharacterCard key={character.id} character={character} />
              ))}
            </div>
          </div>
        )}
        {(!("error" in characters) && characters.results.length > 17) && (
          <Pagination page={page} items={characters.info} />
        )}
      </div>
    </>
  );
}
