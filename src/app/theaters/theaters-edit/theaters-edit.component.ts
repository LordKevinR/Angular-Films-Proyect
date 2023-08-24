import { Component } from '@angular/core';
import { theaterCreationDTO, theaterDTO } from '../theater.interface';

@Component({
  selector: 'app-theaters-edit',
  templateUrl: './theaters-edit.component.html',
  styleUrls: ['./theaters-edit.component.css']
})
export class TheatersEditComponent {

  model: theaterDTO = {
    name: 'Agora Mall',
    latituden: 18.483526200758284,
    longituden: -429.93936181068426
  };

  saveChanges(theater: theaterCreationDTO){
    console.log(theater);
  }
}
