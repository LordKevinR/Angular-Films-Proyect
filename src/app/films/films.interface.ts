export interface FilmCreationDTO {
  title: string;
  summary: string;
  inTheaters: boolean;
  releaseDate: Date;
  trailer: string;
  poster: File;
}
export interface FilmDTO {
  title: string;
  summary: string;
  inTheaters: boolean;
  releaseDate: Date;
  trailer: string;
  poster: string;
}
