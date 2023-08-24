import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreationDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-actors-edit',
  templateUrl: './actors-edit.component.html',
  styleUrls: ['./actors-edit.component.css']
})
export class ActorsEditComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  model: actorDTO = { name: 'Kevin', birthDate: new Date(), photo: 'https://media.licdn.com/dms/image/D4D03AQGTNTHuy1gnZA/profile-displayphoto-shrink_800_800/0/1649301521397?e=2147483647&v=beta&t=5PYEIvVwLNY3paJBUOA7dozEyiDKw8JVNBrtNT0EVkk'}

  ngOnInit(): void{
    this.activatedRoute.params.subscribe(params => {
      // alert(params.id);
    })
  }

  saveChanges(actor: actorCreationDTO) {
    console.log(actor);
  }

}


