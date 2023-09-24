import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { theaterCreationDTO } from './theater.interface';

@Injectable({
  providedIn: 'root'
})
export class TheatersService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiURL + 'theaters';

  public create(theater: theaterCreationDTO){
    return this.http.post(this.apiUrl, theater)
  }
}
