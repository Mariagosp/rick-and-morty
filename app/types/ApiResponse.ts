import { Character } from "./Character";
import { Episode } from "./Episode";
import { Location } from "./Location";

export type ApiResponse<T> =
  | {
      info: {
        count: number;
        pages: number;
        next: string | null;
        prev: string | null;
      };
      results: T[];
    }
  | { error: string };

export type CharactersResponse = ApiResponse<Character>;
export type LocationsResponse = ApiResponse<Location>;
export type EpisodesResponse = ApiResponse<Episode>;
