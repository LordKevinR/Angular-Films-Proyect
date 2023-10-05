import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';
import { actorFilmDTO } from '../actor';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-actors-autocomplete',
  templateUrl: './actors-autocomplete.component.html',
  styleUrls: ['./actors-autocomplete.component.css']
})
export class ActorsAutocompleteComponent implements OnInit {

  constructor(private actorsService: ActorsService) {}
  control: FormControl = new FormControl();

  @Input()
  selectedActors: actorFilmDTO[] = [];

  actorsToShow: actorFilmDTO[] = [];

  columsToShow = ['photo', 'name', 'character', 'actions'];

  @ViewChild(MatTable) table: MatTable<any>

  ngOnInit(): void {
    this.control.valueChanges.subscribe(name => {
      this.actorsService.getByName(name).subscribe(actors => {
        this.actorsToShow = actors;
      })
    })
  }


  optionSelected(event: MatAutocompleteSelectedEvent){
    //console.log(event.option.value);
    this.selectedActors.push(event.option.value);
    this.control.patchValue('');

    if (this.table !== undefined) {
      this.table.renderRows();
    }
  }

  // delete(actor){
  //   const index = this.selectedActors.indexOf(actor);
  //   if (index > -1) {
  //     this.selectedActors.splice(index, 1);
  //   }
  //   this.table.renderRows();
  // }

  delete(actor){
    const index = this.selectedActors.findIndex(a => a.name === actor.name);
    this.selectedActors.splice(index, 1);
    this.table.renderRows();
  }

  dropFinish(event: CdkDragDrop<any[]>){
    const previousIndex = this.selectedActors.findIndex( actor => actor === event.item.data);

    moveItemInArray(this.selectedActors, previousIndex, event.currentIndex);
    this.table.renderRows();
  }

}
