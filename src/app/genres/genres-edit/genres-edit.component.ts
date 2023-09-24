import { Component, OnInit } from '@angular/core';
import { genreCreationDTO, genreDTO } from '../genres';
import { ActivatedRoute, Router } from '@angular/router';
import { GenresService } from '../genres.service';
import { parsearErrorsAPI } from 'src/app/utilities/helpers';

@Component({
  selector: 'app-genres-edit',
  templateUrl: './genres-edit.component.html',
  styleUrls: ['./genres-edit.component.css']
})
export class GenresEditComponent implements OnInit {

  constructor(private router: Router, private genresService: GenresService, private activatedRoute: ActivatedRoute) {}

  model: genreDTO;
  errors: string[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
    this.genresService.getById(params.id)
    .subscribe(genre => {
      this.model = genre;
    })
    }, () => this.router.navigate(['/genres']));
  }

  saveChanges(genre: genreCreationDTO) {
    this.genresService.update(this.model.id, genre)
    .subscribe(() => {
      this.router.navigate(['/genres']);

    }, error => this.errors = parsearErrorsAPI(error))
  }
}
