import { Component } from '@angular/core';
import { theaterCreationDTO, theaterDTO } from '../theater.interface';
import { TheatersService } from '../theaters.service';
import { Router, ActivatedRoute } from '@angular/router';
import { parsearErrorsAPI } from 'src/app/utilities/helpers';

@Component({
  selector: 'app-theaters-edit',
  templateUrl: './theaters-edit.component.html',
  styleUrls: ['./theaters-edit.component.css']
})
export class TheatersEditComponent {

  constructor(private router: Router, private theatersService: TheatersService, private activatedRoute: ActivatedRoute) {}

  model: theaterDTO;
  errors: string[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
    this.theatersService.getById(params.id)
    .subscribe(theater => {
      this.model = theater;
    })
    }, () => this.router.navigate(['/theaters']));
  }

  saveChanges(theater: theaterCreationDTO) {
    this.theatersService.update(this.model.id, theater)
    .subscribe(() => {
      this.router.navigate(['/theaters']);

    }, error => this.errors = parsearErrorsAPI(error))
  }
}
