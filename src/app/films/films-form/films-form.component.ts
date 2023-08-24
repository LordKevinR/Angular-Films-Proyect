import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FilmCreationDTO, FilmDTO } from '../films.interface';
import { MultipleSelectorModel } from 'src/app/utilities/multiple-selector/multipleSelectorModel';

@Component({
  selector: 'app-films-form',
  templateUrl: './films-form.component.html',
  styleUrls: ['./films-form.component.css']
})
export class FilmsFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Input()
  model: FilmDTO;

  @Output()
  OnSubmit: EventEmitter<FilmCreationDTO> = new EventEmitter<FilmCreationDTO>();

  noSelectedGenres: MultipleSelectorModel[] = [
    {key: '1', value: 'Action'},
    {key: '2', value: 'Adventure'},
    {key: '3', value: 'Animation'},
    {key: '4', value: 'Biography'},
    {key: '5', value: 'Comedy'},
  ];

  selectedGenres: MultipleSelectorModel[] = [];

  noSelectedTheaters: MultipleSelectorModel[] = [
    {key: '1', value: 'Sambil'},
    {key: '2', value: 'Agora'},
    {key: '3', value: 'Downtown'},
    {key: '4', value: 'Acropolis'},
    {key: '5', value: 'Galeria 360'},
  ]

  selectedTheaters: MultipleSelectorModel[] = [];



  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', {validators: [Validators.required]}],
      summary: '',
      inTheaters: '',
      trailer: '',
      releaseData: '',
      poster: '',
      genresId: '',
      theatersId: ''
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
    this.form.get('genresId').setValue(genresIds);

    const theatersIds = this.selectedTheaters.map(theater => theater.key);
    this.form.get('theatersId').setValue(theatersIds);

    this.OnSubmit.emit(this.form.value);
  }

  selectedFile(file: File) {
    this.form.get('poster').setValue(file);
  }
}


