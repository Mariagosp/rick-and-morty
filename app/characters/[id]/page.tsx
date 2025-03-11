import BackButton from "@/app/components/BackButton";
import { Character } from "@/app/types/Character";
import { Status } from "@/app/types/Status";

async function getCharacter(id: string) {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`,
    {
      next: { revalidate: 10 },
    }
  );

  if (!response.ok) {
    throw new Error("Персонаж не найден");
  }

  return response.json();
}

export default async function CharacterPage({
  params,
}: {
  params: Record<string, string>;
}) {
  const character: Character = await getCharacter(params.id);

  return (
    <>
      <div className="max-w-4xl mx-auto p-6">
        <BackButton />
        <div className="flex flex-col md:flex-row items-center gap-6 bg-gray-800 p-6 rounded-2xl shadow-lg">
          <img
            src={character.image}
            alt={character.name}
            className="w-64 h-64 rounded-lg object-cover border-4 border-gray-700"
          />
          <div className="text-white">
            <h1 className="text-4xl font-bold">{character.name}</h1>
            <p className="text-lg opacity-80">
              {character.species} - {character.gender}
            </p>
            <p className="mt-2 text-lg font-semibold flex items-center">
              <span
                className={`w-3 h-3 rounded-full mr-2 ${
                  character.status === Status.Alive
                    ? "bg-green-500"
                    : "bg-red-500"
                }`}
              ></span>
              {character.status}
            </p>
            <p className="mt-2">
              <strong>First seen in:</strong>{" "}
              {character.origin.name !== "unknown" ? (
                <a
                  href={character.origin.url}
                  target="_blank"
                  className="hover:text-blue-400 hover:underline"
                >
                  {character.origin.name}
                </a>
              ) : (
                <span>{character.origin.name}</span>
              )}
            </p>
            <p>
              <strong>Last known location:</strong>{" "}
              <a
                href={character.location.url}
                target="_blank"
                className="hover:text-blue-400 hover:underline"
              >
                {character.location.name}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-3xl font-bold text-white mb-4">Episodes</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {character.episode.map((episodeUrl, index) => {
              const episodeId = episodeUrl.split("/").pop();
              return (
                <li
                  key={episodeId}
                  className="bg-gray-700 p-4 rounded-lg text-white"
                >
                  <a
                    href={episodeUrl}
                    target="_blank"
                    className="hover:underline"
                  >
                    Episode {index + 1}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
