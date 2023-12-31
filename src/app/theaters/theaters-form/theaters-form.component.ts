import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { theaterCreationDTO } from '../theater.interface';
import { ILocation } from 'src/app/utilities/map/location.interface';

@Component({
  selector: 'app-theaters-form',
  templateUrl: './theaters-form.component.html',
  styleUrls: ['./theaters-form.component.css']
})
export class TheatersFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Input()
  errors: string[] = [];

  @Input()
  model: theaterCreationDTO;

  @Output()
  saveChanges: EventEmitter<theaterCreationDTO> = new EventEmitter<theaterCreationDTO>();

  initialLocation: ILocation[] = [];

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', {validators: [Validators.required], },],
      latitude: ['', {validators: [Validators.required], },],
      longitude: ['', {validators: [Validators.required], },],
  });

    if (this.model !== undefined) {
      this.form.patchValue(this.model)
      this.initialLocation.push({latitude: this.model.latitude, longitude: this.model.longitude})
    }
  }

  selectedLocation(location: ILocation){
    this.form.patchValue(location);
  }

  OnSubmit() {
    this.saveChanges.emit(this.form.value);
  }
}
