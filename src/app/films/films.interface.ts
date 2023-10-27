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
  id: number;
  title: string;
  summary: string;
  inTheaters: boolean;
  releaseDate: Date;
  trailer: string;
  poster: string;
  genres: genreDTO[];
  actors: actorFilmDTO[];
  theaters: theaterDTO[];
}

export interface FilmsPostGet {
  genres: genreDTO[];
  theaters: theaterDTO[];
}

export interface LandingPageDTO {
  inTheaters: FilmDTO[];
  nextReleases: FilmDTO[];
}

export interface FilmPutGet{
  film: FilmDTO;
  selectedGenres: genreDTO[];
  noSelectedGenres: genreDTO[];
  selectedTheaters: theaterDTO[];
  noSelectedTheaters: theaterDTO[];
  actors: actorFilmDTO[];
}
