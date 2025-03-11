import { Episode } from "../types/Episode";

type Props = {
  episode: Episode;
};

const EpisodeCard: React.FC<Props> = ({ episode }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <h2 className="text-xl font-bold text-green-400">{episode.name}</h2>
      <p className="text-sm text-gray-400">{episode.episode}</p>
      <p className="text-sm text-gray-300">🗓 {episode.air_date}</p>

      <div className="mt-3">
        <p className="font-semibold">Characters:</p>
        <div className="flex gap-2 mt-2">
          {episode.characters.slice(0, 3).map((characterUrl, index) => (
            <img
              key={index}
              src={`${characterUrl.replace(
                "character/",
                "character/avatar/"
              )}.jpeg`}
              alt="Character"
              className="w-10 h-10 rounded-full border-2 border-gray-600"
            />
          ))}
          {episode.characters.length > 3 && (
            <span className="text-sm text-gray-400">
              +{episode.characters.length - 3} more
            </span>
          )}
        </div>
      </div>
      <a
        href={episode.url}
        target="_blank"
        className="mt-3 inline-block text-blue-400 hover:underline"
      >
        View Details →
      </a>
    </div>
  );
};

export default EpisodeCard;
