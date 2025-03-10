import { Location } from "../types/Location";

type Props = {
  location: Location;
}

const LocationCard: React.FC<Props> = ({ location }) => {
  return (
    <div className="bg-gray-800 text-white rounded-xl shadow-lg p-5">
      <a href={location.url} target="_blank">
        <h2 className="text-2xl font-bold text-green-400 hover:text-orange-400">{location.name}</h2>
      </a>
      <p className="text-gray-300">{location.type} – {location.dimension}</p>
      <p className="mt-2 text-sm text-gray-400">
        🏠 Residents: {location.residents.length}
      </p>
    </div>
  );
}

export default LocationCard;
