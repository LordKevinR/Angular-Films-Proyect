import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { actorCreationDTO, actorDTO } from './actor';
import { formatDate } from '../utilities/helpers';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  constructor(private http: HttpClient) { }

  private apiUrl = environment.apiURL + 'actors';

  public getAll(page: number, numberOfRecordsToShow: number):Observable<any> {
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('RecordsPerPAge', numberOfRecordsToShow.toString());
    return this.http.get<actorDTO[]>(this.apiUrl, {observe: 'response', params})
  };

  public getById(id: number):Observable<actorDTO> {
    return this.http.get<actorDTO>(this.apiUrl + '/' + id);
  }

    public create(actor: actorCreationDTO){
      const formData = this.buildFormData(actor);
      return this.http.post(this.apiUrl, formData)
    }

    public update(id:number, actor: actorCreationDTO){
      const formData = this.buildFormData(actor);
      return this.http.put(this.apiUrl + '/' + id, formData)
    }

  private buildFormData(actor: actorCreationDTO){
    const formData = new FormData();
    formData.append('name', actor.name);
    if (actor.biography){
      formData.append('biography', actor.biography);
    }
    if (actor.birthDate){
      formData.append('birthDate', formatDate(actor.birthDate));
    }
    if (actor.photo){
      formData.append('photo', actor.photo);
    }
    return formData;

  }

  public delete(id: number){
    return this.http.delete(this.apiUrl + '/' + id)
  }


}
