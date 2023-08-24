import { Component } from '@angular/core';
import { genreCreationDTO } from '../genres';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genres-edit',
  templateUrl: './genres-edit.component.html',
  styleUrls: ['./genres-edit.component.css']
})
export class GenresEditComponent {

  constructor(private router: Router) {}

  model: genreCreationDTO = {
    name: 'Drama',
  }
  saveChanges(genre: genreCreationDTO) {
    //save changes
    console.log(genre);
    this.router.navigate(['/genres']);
  }
}
