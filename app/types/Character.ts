import { Gender } from "./Gender";
import { Species } from "./Species";
import { Status } from "./Status";

export type Character = {
  id: number;
  name: string;
  status: Status;
  species: Species;
  type: string;
  gender: Gender;
  origin: OriginAndLocation;
  location: OriginAndLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

type OriginAndLocation = {
  name: string;
  url: string;
}