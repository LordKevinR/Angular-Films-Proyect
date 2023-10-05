import { actorFilmDTO } from "../actors/actor";
import { genreDTO } from "../genres/genres";
import { theaterDTO } from "../theaters/theater.interface";

export interface FilmCreationDTO {
  title: string;
  summary: string;
  inTheaters: boolean;
  releaseDate: Date;
  trailer: string;
  poster: File;
  genresIds: number[];
  theatersIds: number[];
  actors: actorFilmDTO[];
}
export interface FilmDTO {
  title: string;
  summary: string;
  inTheaters: boolean;
  releaseDate: Date;
  trailer: string;
  poster: string;
}

export interface FilmsPostGet {
  genres: genreDTO[];
  theaters: theaterDTO[];
}
