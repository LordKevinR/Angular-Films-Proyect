import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilmCreationDTO, FilmDTO } from '../films.interface';
import { MultipleSelectorModel } from 'src/app/utilities/multiple-selector/multipleSelectorModel';
import { actorFilmDTO } from 'src/app/actors/actor';

@Component({
  selector: 'app-films-form',
  templateUrl: './films-form.component.html',
  styleUrls: ['./films-form.component.css']
})
export class FilmsFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Input()
  errors: string[] = [];

  @Input()
  model: FilmDTO;

  @Output()
  OnSubmit: EventEmitter<FilmCreationDTO> = new EventEmitter<FilmCreationDTO>();

  @Input()
  noSelectedGenres: MultipleSelectorModel[];

  selectedGenres: MultipleSelectorModel[] = [];

  @Input()
  noSelectedTheaters: MultipleSelectorModel[];

  selectedTheaters: MultipleSelectorModel[] = [];

  @Input()
  selectedActors: actorFilmDTO[] = [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', {validators: [Validators.required]}],
      summary: '',
      inTheaters: '',
      trailer: '',
      releaseData: '',
      poster: '',
      genresIds: '',
      theatersIds: '',
      actors: ''
    });

    if (this.model) {
      this.form.patchValue(this.model);
    }
  }


  changeMarkdown(text){
    this.form.get('summary').setValue(text);
  }

  saveChanges(){
    const genresIds = this.selectedGenres.map(genre => genre.key);
    this.form.get('genresIds').setValue(genresIds);

    const theatersIds = this.selectedTheaters.map(theater => theater.key);
    this.form.get('theatersIds').setValue(theatersIds);

    const actors = this.selectedActors.map(val => {
      return {id: val.id, character: val.character}
    });
    this.form.get('actors').setValue(actors);

    this.OnSubmit.emit(this.form.value);
  }

  selectedFile(file: File) {
    this.form.get('poster').setValue(file);
  }
}


