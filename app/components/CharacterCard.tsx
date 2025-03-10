import Link from "next/link";
import { Character } from "../types/Character";
import { Status } from "../types/Status";

type Props = {
  character: Character;
};

const CharacterCard: React.FC<Props> = (props) => {
  const { character } = props;
  return (
    <>
      <div className="sm:w-72 min-h-[350px] flex flex-col bg-gray-800 text-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
        <img
          src={character.image}
          alt={character.name}
          className="w-full h-56 object-cover"
        />
        <div className="p-4 flex-1">
          <h2 className="text-2xl font-bold hover:text-orange-400">
            <Link href={`/characters/${character.id}`}>{character.name}</Link>
          </h2>
          <p className="text-sm opacity-80">
            {character.species} - {character.gender}
          </p>
          <p className="mt-2 text-sm font-semibold flex items-center">
            <span
              className={`w-3 h-3 rounded-full mr-2 ${
                character.status === Status.Alive
                  ? "bg-green-500"
                  : "bg-red-500"
              }`}
            ></span>
            {character.status}
          </p>
          <p className="text-sm mt-2">
            <strong>First seen in:</strong>
            <a
              target="_blank"
              className="hover:text-violet-400"
              href={character.origin.url}
            >
              {" "}
              {character.origin.name}
            </a>
          </p>
          <p className="text-sm">
            <strong>Last known location:</strong>
            <a
              target="_blank"
              className="hover:text-violet-400"
              href={character.location.url}
            >
              {" "}
              {character.location.name}
            </a>
          </p>
          <p className="text-sm mt-2">
            <strong>Episodes:</strong> {character.episode.length}
          </p>
        </div>
      </div>
    </>
  );
};

export default CharacterCard;
