import { Component } from '@angular/core';
import { FilmCreationDTO, FilmDTO } from '../films.interface';

@Component({
  selector: 'app-films-edit',
  templateUrl: './films-edit.component.html',
  styleUrls: ['./films-edit.component.css']
})
export class FilmsEditComponent {

  model: FilmDTO = {
    title: 'SpiderMAn',
    summary: 'Whats going on in the world',
    inTheaters: true,
    releaseDate: new Date(),
    trailer: 'trailer klk',
    poster: 'https://4.bp.blogspot.com/-m7qzhWsqRAY/XLSQM2nZ7nI/AAAAAAAAM_4/mPq4c-7UBkEpBMX-FAcgnVGP6TBlAWy_ACLcBGAs/s2560/marvel-spiderman-new-4k-6b-2048x2048.jpg'
  }

  saveChanges(film: FilmCreationDTO){
    console.log(film);

  }
}
