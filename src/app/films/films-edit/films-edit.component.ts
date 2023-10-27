import { Component, OnInit } from '@angular/core';
import { FilmCreationDTO, FilmDTO, FilmPutGet } from '../films.interface';
import { FilmsService } from '../films.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MultipleSelectorModel } from 'src/app/utilities/multiple-selector/multipleSelectorModel';
import { actorFilmDTO } from 'src/app/actors/actor';

@Component({
  selector: 'app-films-edit',
  templateUrl: './films-edit.component.html',
  styleUrls: ['./films-edit.component.css']
})
export class FilmsEditComponent implements OnInit {

  constructor(private filmsService: FilmsService, private activatedRoute: ActivatedRoute, private router: Router) {}

  model: FilmDTO;
  selectedGenres: MultipleSelectorModel[];
  noSelectedGenres: MultipleSelectorModel[];
  selectedTheaters: MultipleSelectorModel[];
  noSelectedTheaters: MultipleSelectorModel[];
  selectedActors: actorFilmDTO[];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.filmsService.putGet(params.id)
      .subscribe(filmPutGet => {
        this.model = filmPutGet.film;

        this.noSelectedGenres = filmPutGet.noSelectedGenres.map(genres => {
          return <MultipleSelectorModel>{ key: genres.id, value: genres.name}
        });

        this.selectedGenres = filmPutGet.selectedGenres.map(genres => {
          return <MultipleSelectorModel>{ key: genres.id, value: genres.name}
        });

        this.noSelectedTheaters = filmPutGet.noSelectedTheaters.map(theaters => {
          return <MultipleSelectorModel>{ key: theaters.id, value: theaters.name}
        });

        this.selectedTheaters = filmPutGet.selectedTheaters.map(theaters => {
          return <MultipleSelectorModel>{ key: theaters.id, value: theaters.name}
        });

        this.selectedActors = filmPutGet.actors;
      })
    })
  }

  saveChanges(film: FilmCreationDTO){
    this.filmsService.update(this.model.id, film)
    .subscribe(() => this.router.navigate(['/film/' + this.model.id]))
  }
}
