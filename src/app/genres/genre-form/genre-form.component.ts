import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { capitalFirstLetter } from 'src/app/utilities/validations/capitalFirstLetter';
import { genreCreationDTO } from '../genres';

@Component({
  selector: 'app-genre-form',
  templateUrl: './genre-form.component.html',
  styleUrls: ['./genre-form.component.css']
})
export class GenreFormComponent implements OnInit {

  constructor( private formBuilder: FormBuilder){}

  form: FormGroup;

  @Input()
  model: genreCreationDTO;



  @Output()
  submit: EventEmitter<genreCreationDTO> = new EventEmitter<genreCreationDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required, Validators.minLength(3), capitalFirstLetter() ]
      }]
    });

    if (this.model != undefined) {
      this.form.patchValue(this.model);
    }
  }

  saveChanges() {
    this.submit.emit(this.form.value);
  }

  getNameFieldError() {

    var field = this.form.get('name');

    if (field.hasError('required')) {
      return 'Field Name is required';
    }

    if (field.hasError('capitalFirstLetter')) {
      return field.getError('capitalFirstLetter').message;
    }

    if (field.hasError('minlength')) {
      return 'Field Name must have at least 3 characters';
    }

    return '';
  }

}
