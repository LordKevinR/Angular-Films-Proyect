import { Component } from '@angular/core';
import { FilmCreationDTO } from '../films.interface';

@Component({
  selector: 'app-films-create',
  templateUrl: './films-create.component.html',
  styleUrls: ['./films-create.component.css']
})
export class FilmsCreateComponent {


  saveChanges(film: FilmCreationDTO) {
    console.log(film);
  }
}
