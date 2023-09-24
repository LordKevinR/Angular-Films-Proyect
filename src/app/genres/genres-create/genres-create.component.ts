import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { capitalFirstLetter } from 'src/app/utilities/validations/capitalFirstLetter';
import { genreCreationDTO } from '../genres';
import { GenresService } from '../genres.service';
import { parsearErrorsAPI } from 'src/app/utilities/helpers';

@Component({
  selector: 'app-genres-create',
  templateUrl: './genres-create.component.html',
  styleUrls: ['./genres-create.component.css']
})

export class GenresCreateComponent {

  errors: string[] = [];

  constructor(private router: Router, private genresService: GenresService ) { }

  saveChanges(genre: genreCreationDTO) {
    this.genresService.create(genre).subscribe( () => {
      this.router.navigate(['/genres'])
    }, error => this.errors = parsearErrorsAPI(error));
  }
}
