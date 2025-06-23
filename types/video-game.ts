export type VideoGameConsole = {
  abbreviation?: string;
  controllerPorts: number | undefined;
  manufacturer: string;
  name: string;
  releaseYear: string;
};

export type VideoGame = {
  console: VideoGameConsole;
  ersbRating?: string;
  genre: string[];
  numOfPlayers: number | undefined;
  publisher: string;
  title: string;
  year: string;
};
