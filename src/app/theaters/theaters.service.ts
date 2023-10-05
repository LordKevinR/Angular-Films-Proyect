import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { theaterCreationDTO, theaterDTO } from './theater.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TheatersService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiURL + 'theaters';

  public create(theater: theaterCreationDTO){
    return this.http.post(this.apiUrl, theater)
  }

  public getAll(page: number, numberOfRecordsToShow: number):Observable<any> {
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('RecordsPerPAge', numberOfRecordsToShow.toString());
    return this.http.get<theaterDTO[]>(this.apiUrl, {observe: 'response', params})
  };

  public getById(id: number):Observable<theaterDTO> {
    return this.http.get<theaterDTO>(this.apiUrl + '/' + id);
  }

  public update(id: number, theater: theaterCreationDTO){
    return this.http.put(this.apiUrl + '/' + id, theater)
  }

  public delete(id: number){
    return this.http.delete(this.apiUrl + '/' + id)
  }
}
