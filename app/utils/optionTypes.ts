import { Gender } from "../types/Gender";
import { Species } from "../types/Species";
import { Status } from "../types/Status";

export const locationTypes = [
  'All',
  "Planet",
  "Cluster",
  "Space station",
  "Microverse",
  "TV",
  "Resort",
  "Fantasy town",
  "Dream",
  "Dimension",
  "Menagerie",
  "Game",
  "Customs",
  "Daycare",
  "Dwarf planet",
  "Miniverse",
  "Teenyverse",
  "Box",
  "Spacecraft",
  "Artificially generated world",
  "Machine",
  "Arcade",
  "Quadrant",
  "Quasar",
  "Mount",
  "Liquid",
  "Convention",
  "Woods",
  "Diegesis",
  "Non-Diegetic Alternative Reality",
  "Nightmare",
  "Asteroid",
  "Acid Plant",
  "Reality",
  "Unknown",
];

export const genderArr: (Gender | "All")[] = ["All", ...Object.values(Gender)];
export const speciesArr: (Species | "All")[] = ["All", ...Object.values(Species)];
export const statusArr: (Status | 'All')[] = ['All', ...Object.values(Status)];