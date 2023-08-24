import { Component } from '@angular/core';
import { theaterCreationDTO } from '../theater.interface';

@Component({
  selector: 'app-theaters-create',
  templateUrl: './theaters-create.component.html',
  styleUrls: ['./theaters-create.component.css']
})
export class TheatersCreateComponent {

  saveChanges(theater: theaterCreationDTO){
    console.log(theater);
  }
}
