import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { actorCreationDTO, actorDTO } from '../actor';
import { parsearErrorsAPI } from 'src/app/utilities/helpers';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-actors-edit',
  templateUrl: './actors-edit.component.html',
  styleUrls: ['./actors-edit.component.css']
})
export class ActorsEditComponent implements OnInit {

  constructor(private router: Router, private actorsService: ActorsService, private activatedRoute: ActivatedRoute) {}

  model: actorDTO;
  errors: string[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
    this.actorsService.getById(params.id)
    .subscribe(actor => {
      this.model = actor;
    })
    }, () => this.router.navigate(['/actors']));
  }

  saveChanges(actor: actorCreationDTO) {
    this.actorsService.update(this.model.id, actor)
    .subscribe(() => {
      this.router.navigate(['/actors']);

    }, error => this.errors = parsearErrorsAPI(error))
  }

}


