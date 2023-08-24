import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { capitalFirstLetter } from 'src/app/utilities/validations/capitalFirstLetter';
import { genreCreationDTO } from '../genres';

@Component({
  selector: 'app-genres-create',
  templateUrl: './genres-create.component.html',
  styleUrls: ['./genres-create.component.css']
})

export class GenresCreateComponent {

  constructor(private router: Router, ) { }

  saveChanges(genre: genreCreationDTO) {
    //save changes
    console.log(genre);
    this.router.navigate(['/genres']);
  }
}
