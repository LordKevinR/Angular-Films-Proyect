import { Component, OnInit } from '@angular/core';
import { actorCreationDTO } from '../actor';
import { ActorsService } from '../actors.service';
import { Router } from '@angular/router';
import { parsearErrorsAPI } from '../../utilities/helpers';

@Component({
  selector: 'app-actors-create',
  templateUrl: './actors-create.component.html',
  styleUrls: ['./actors-create.component.css']
})
export class ActorsCreateComponent implements OnInit{

  constructor(private actorsService: ActorsService, private router: Router) { }

  ngOnInit(): void {
  }

  errors = [];

  saveChanges(actor: actorCreationDTO){
    this.actorsService.create(actor)
    .subscribe(() => {
      this.router.navigate(['/actors']);
    }, errors => this.errors = parsearErrorsAPI(errors));

  }
}
