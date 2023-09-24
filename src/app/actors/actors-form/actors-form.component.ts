import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { actorCreationDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-actors-form',
  templateUrl: './actors-form.component.html',
  styleUrls: ['./actors-form.component.css']
})
export class ActorsFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Input()
  errors: string[] = [];

  @Input()
  model: actorDTO;

  @Output()
  OnSubmit: EventEmitter<actorCreationDTO> = new EventEmitter<actorCreationDTO>();

  changedImage: boolean = false;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      birthDate: '',
      photo: '',
      biography: ''
    });

    if (this.model !== undefined ) {
      this.form.patchValue(this.model)
    }

  }

  onSubmit() {
    if (!this.changedImage){
      this.form.patchValue({'photo': null})
    }
    this.OnSubmit.emit(this.form.value);
  }

  markdownChange(text: string){
    this.form.get('biography').setValue(text);
  }

  selectedFile(file) {
    this.changedImage = true;
    this.form.get('photo').setValue(file);
  }

}
