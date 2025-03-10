import LocationCard from "../components/LocationCard";
import Pagination from "../components/Pagination";
import SearchInput from "../components/SearchInput";
import { Location } from "../types/Location";
import SelectComp from "../components/Select";
import { LocationsResponse } from "../types/ApiResponse";
import { locationTypes } from "../utils/optionTypes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Locations))",
};

async function getLocations(
  name: string,
  page: number,
  type: string
): Promise<LocationsResponse> {
  const response = await fetch(
    `https://rickandmortyapi.com/api/location?name=${name}&page=${page}&type=${type}`,
    {
      next: {
        revalidate: 10,
      },
    }
  );
  const data = response.json();
  return data;
}

const LocationsPage = async ({
  searchParams,
}: {
  searchParams: { name?: string; page: number; type: string };
}) => {
  const name = searchParams.name || "";
  const page = Number(searchParams.page) || 1;
  const type = searchParams.type || "";
  const locations: LocationsResponse = await getLocations(name, page, type);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="pb-7 text-4xl font-bold text-white text-center">
        Locations Page!
      </h1>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 mb-6">
        <div className="flex flex-col">
          <label className="text-white mb-1">Name 🔎</label>
          <SearchInput placeholder="Search a location..." />
        </div>
        <div className="flex flex-col">
          <label className="text-white mb-1">Type 🌎</label>
          <SelectComp value="type" optionArray={locationTypes} />
        </div>
      </div>

      {"error" in locations ? (
        <p className="text-center text-xl text-red-500 mt-10">
          Oops! It seems like nobody's here
        </p>
      ) : (
        <div className="w-full p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {locations?.results.map((location: Location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        </div>
      )}
      {!("error" in locations) && <Pagination items={locations} page={page} />}
    </div>
  );
};

export default LocationsPage;
