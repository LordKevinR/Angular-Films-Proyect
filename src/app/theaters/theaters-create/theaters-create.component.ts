import { Component } from '@angular/core';
import { theaterCreationDTO } from '../theater.interface';
import { Router } from '@angular/router';
import { parsearErrorsAPI } from 'src/app/utilities/helpers';
import { TheatersService } from '../theaters.service';

@Component({
  selector: 'app-theaters-create',
  templateUrl: './theaters-create.component.html',
  styleUrls: ['./theaters-create.component.css']
})
export class TheatersCreateComponent {

  errors: string[] = [];

  constructor(private router: Router, private theatersService: TheatersService ) { }

  saveChanges(theater: theaterCreationDTO) {
    this.theatersService.create(theater).subscribe( () => {
      this.router.navigate(['/theaters'])
    }, error => this.errors = parsearErrorsAPI(error));
  }
}
