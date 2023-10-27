import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { FilmCreationDTO, FilmDTO, FilmPutGet, FilmsPostGet, LandingPageDTO } from './films.interface';
import { formatDate } from '../utilities/helpers';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'films'

  public getLandingPage(): Observable<LandingPageDTO>{
    return this.http.get<LandingPageDTO>(`${this.apiURL}`);
  }


  public postGet(): Observable<FilmsPostGet>{
    return this.http.get<FilmsPostGet>(`${this.apiURL}/postget`);
  }

  public putGet(id: number): Observable<FilmPutGet>{
    return this.http.get<FilmPutGet>(`${this.apiURL}/putget/${id}`);
  }

  public getById(id: number): Observable<FilmDTO>{
    return this.http.get<FilmDTO>(`${this.apiURL}/${id}`);
  }


  public create(film: FilmCreationDTO){
    const formData = this.BuildFormData(film);
    return this.http.post(this.apiURL, formData);
  }

  public update(id: number, film: FilmCreationDTO){
    const formData = this.BuildFormData(film);
    return this.http.put(`${this.apiURL}/${id}`, formData);
  }


  private BuildFormData(film: FilmCreationDTO): FormData{
    const formData = new FormData();
    formData.append('title', film.title);
    formData.append('summary', film.summary);
    formData.append('trailer', film.trailer);
    formData.append('inTheaters', film.inTheaters.toString());

    if(film.releaseDate){
      formData.append('releaseDate', formatDate(film.releaseDate));
    }

    if (film.poster){
      formData.append('poster', film.poster);
    }

    formData.append('actors', JSON.stringify(film.actors));
    formData.append('genresIds', JSON.stringify(film.genresIds));
    formData.append('theatersIds', JSON.stringify(film.theatersIds));

    return formData;

  }
}
