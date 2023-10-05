import { Component, OnInit } from '@angular/core';
import { FilmCreationDTO } from '../films.interface';
import { FilmsService } from '../films.service';
import { MultipleSelectorModel } from '../../utilities/multiple-selector/multipleSelectorModel';
import { parsearErrorsAPI } from '../../utilities/helpers';

@Component({
  selector: 'app-films-create',
  templateUrl: './films-create.component.html',
  styleUrls: ['./films-create.component.css']
})
export class FilmsCreateComponent implements OnInit {

  constructor(private filmsService: FilmsService){}

  errors: string[] = [];

  noSelectedGenres: MultipleSelectorModel[];
  noSelectedTheaters: MultipleSelectorModel[];

  ngOnInit(): void {
    this.filmsService.postGet()
    .subscribe(result => {

      this.noSelectedGenres = result.genres.map(genres => {
        return <MultipleSelectorModel>{ key: genres.id, value: genres.name}
      });

      this.noSelectedTheaters = result.theaters.map(theaters => {
        return <MultipleSelectorModel>{ key: theaters.id, value: theaters.name}
      });

    }, error => console.error(error))
  }


  saveChanges(film: FilmCreationDTO) {
    this.filmsService.create(film)
    .subscribe( () => console.log('success'),
    error => this.errors = parsearErrorsAPI(error));
  }
}
