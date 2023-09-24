import { Injectable } from '@angular/core';
import { genreCreationDTO, genreDTO } from './genres';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiURL + 'genres';

  public getAll(page: number, numberOfRecordsToShow: number):Observable<any> {
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('RecordsPerPAge', numberOfRecordsToShow.toString());
    return this.http.get<genreDTO[]>(this.apiUrl, {observe: 'response', params})
  };

  public getById(id: number):Observable<genreDTO> {
    return this.http.get<genreDTO>(this.apiUrl + '/' + id);
  }

  public create(genre: genreCreationDTO){
    return this.http.post(this.apiUrl, genre)
  }

  public update(id: number, genre: genreCreationDTO){
    return this.http.put(this.apiUrl + '/' + id, genre)
  }

  public delete(id: number){
    return this.http.delete(this.apiUrl + '/' + id)
  }

}
