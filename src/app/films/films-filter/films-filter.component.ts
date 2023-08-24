import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-films-filter',
  templateUrl: './films-filter.component.html',
  styleUrls: ['./films-filter.component.css']
})
export class FilmsFilterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private location: Location, private activatedRoute: ActivatedRoute) { }

  form: FormGroup;

  genres = [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Adventure' },
    { id: 3, name: 'Animation' },
  ]

  films = [
    { title: 'Star Wars', genreId: [1,2], nextReleases: true, inTheaters: false, poster: "https://media.vogue.mx/photos/649a07a3b57b9043d1e57cc6/1:1/w_1200,h_1200,c_limit/BAR-00238.jpg"},
    { title: 'The Lord of the Rings', genreId: [2,3], nextReleases: true, inTheaters: true, poster: "https://media.vogue.mx/photos/649a07a3b57b9043d1e57cc6/1"},
    { title: 'The Hobbit', genreId: [3,1], nextReleases: true, inTheaters: false, poster: "https://media.vogue.mx/photos/649a07a3b57b9043d1e57cc6/1"},
    { title: 'The Matrix', genreId: [3,2], nextReleases: true, inTheaters: false, poster: "https://media.vogue.mx/photos/649a07a3b57b9043d1e57cc6/1"},
    { title: 'The Godfather', genreId: [1], nextReleases: false, inTheaters: true, poster: "https://media.vogue.mx/photos/649a07a3b57b9043d1e57cc6/1"},
    { title: 'The Dark Knight', genreId: [2], nextReleases: false, inTheaters: true, poster: "https://media.vogue.mx/photos/649a07a3b57b9043d1e57cc6/1"},
    { title: 'The Shawshank Redemption', genreId: [3], nextReleases: false, inTheaters: true, poster: "https://media.vogue.mx/photos/649a07a3b57b9043d1e57cc6/"},
    { title: 'The Godfather: Part II', genreId: [1], nextReleases: false, inTheaters: true, poster: "https://media.vogue.mx/photos/649a07a3b57b9043d1e57cc6/1"},
  ]


  filmsOrginal = this.films;

  originForm = {
    title: '',
    genreId: 0,
    nextReleases: false,
    inTheaters: false
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group(this.originForm);
    this.readSearchParametersFromURL();
    this.searchFilms(this.form.value);

    this.form.valueChanges.subscribe(values => {
      this.films = this.filmsOrginal;
      this.searchFilms(values);
      this.writeSearchParametersInURL();
    })
  }

  private readSearchParametersFromURL(){
    this.activatedRoute.queryParams.subscribe((params) => {
      var object: any = {};

      if (params.title) {
        object.title = params.title;
      }
      if (params.genreId) {
        object.genreId = Number(params.genreId);
      }
      if (params.nextReleases) {
        object.nextReleases = true;
      }
      if (params.inTheaters) {
        object.inTheaters = true;
      }

      this.form.patchValue(object);
    });
  }

  private writeSearchParametersInURL(){
    var queryStrings = [];

    var formValues = this.form.value;

    if ( formValues.title ) {
      queryStrings.push(`title=${formValues.title}`);
    }
    if ( formValues.genreId ) {
      queryStrings.push(`genreId=${formValues.genreId}`);
    }
    if(formValues.nextReleases) {
      queryStrings.push(`nextReleases=true`);
    }
    if(formValues.inTheaters) {
      queryStrings.push(`inTheaters=true`);
    }

    this.location.replaceState('films/search', queryStrings.join('&'));
  }



  clear(): void {
    this.form.patchValue(this.originForm)
  }

  searchFilms(values: any): void {
    if (values.title) {
      this.films = this.films.filter(film => film.title.toLowerCase().includes(values.title.toLowerCase()));
    }

    if (values.genreId) {
      this.films = this.films.filter(film => film.genreId.includes(values.genreId));
    }

    if(values.nextReleases) {
      this.films = this.films.filter(film => film.nextReleases);
    }

    if(values.inTheaters) {
      this.films = this.films.filter(film => film.inTheaters);
    }
  }
}
