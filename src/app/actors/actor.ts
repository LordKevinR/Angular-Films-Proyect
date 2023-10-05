export interface actorCreationDTO {
  name: string;
  birthDate: Date;
  photo: File;
  biography: string;
}
export interface actorDTO {
  id: number;
  name: string;
  birthDate: Date;
  photo: string;
  biography: string;
}

export interface actorFilmDTO{
  id: number;
  name: string;
  character: string;
  photo: string;
}
