import { Component } from '@angular/core';
import { actorCreationDTO } from '../actor';

@Component({
  selector: 'app-actors-create',
  templateUrl: './actors-create.component.html',
  styleUrls: ['./actors-create.component.css']
})
export class ActorsCreateComponent {

  saveChanges(actor: actorCreationDTO){
    console.log(actor);
  }
}
