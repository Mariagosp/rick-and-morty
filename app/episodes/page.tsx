import { Episode } from "../types/Episode";
import EpisodeCard from "../components/EpisodeCard";
import Pagination from "../components/Pagination";
import { EpisodesResponse } from "../types/ApiResponse";
import { Metadata } from "next";
import SearchBy from "../components/SearchBy";

export const metadata: Metadata = {
  title: "Episodes))",
};

async function getEpisodes(name: string, page: number, episode: string): Promise<EpisodesResponse> {
  const response = await fetch(
    `https://rickandmortyapi.com/api/episode?page=${page}&name=${name}&episode=${episode}`,
    {
      next: {
        revalidate: 10,
      },
    }
  );
  const data = response.json();

  return data;
}

const EpisodesPage = async ({
  searchParams,
}: {
  searchParams: { name?: string, page?: number, episode: string };
}) => {
  const name = searchParams?.name || "";
  const episode = searchParams?.episode || "";
  const page = Number(searchParams.page) || 1;
  const episodes = await getEpisodes(name, page, episode);
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="pb-7 text-4xl font-bold text-white text-center">
          Episodes Page!
        </h1>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 mb-6">
          <SearchBy />
        </div>

        {'error' in episodes ? (
          <p className="text-center text-xl text-red-500 mt-10">
            Oops! It seems like nobody is here
          </p>
        ) : (
          <div className="w-full p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {episodes.results.map((episode: Episode) => (
                <EpisodeCard key={episode.id} episode={episode} />
              ))}
            </div>
          </div>
        )}
        {!("error" in episodes) && (
          <Pagination page={page} items={episodes.info} />
        )}
      </div>
    </>
  );
};

export default EpisodesPage;

