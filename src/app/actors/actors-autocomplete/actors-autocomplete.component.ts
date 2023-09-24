import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-actors-autocomplete',
  templateUrl: './actors-autocomplete.component.html',
  styleUrls: ['./actors-autocomplete.component.css']
})
export class ActorsAutocompleteComponent implements OnInit {

  control: FormControl = new FormControl();

  actors = [
    {name: 'Tom Holland', character:'', photo: 'https://th.bing.com/th/id/R.6932991a2e6e4ec629c2a5dfa624a08e?rik=KgiguTk3fK2CXA&riu=http%3a%2f%2fimage.tmdb.org%2ft%2fp%2foriginal%2fl6zPRmg8NI7Y65G5GUqwvjxFdsx.jpg&ehk=8zWh8rKt4zi434mm8noVRcPHjH71L%2bxZOzc%2fB2N0Ml8%3d&risl=&pid=ImgRaw&r=0'},
    {name: 'Robert Downey Jr.', character:'', photo: 'https://th.bing.com/th/id/OIP.VB1ncX9IduVM7V-R_36x4gHaJ3?pid=ImgDet&rs=1'},
    {name: 'Chris Evans', character:'', photo: 'https://th.bing.com/th/id/R.ec4f5709bf705c4f7e67d9507e453998?rik=iZoqdVuJsYlsPw&riu=http%3a%2f%2fwww1.pictures.zimbio.com%2fgi%2fChris%2bEvans%2bMySpace%2bMTV%2bTower%2bDuring%2bComic%2bKRi8A-Y12T-l.jpg&ehk=cpFQER%2fa0LxGHxDKzSJvfTCnApqdc3MTdBtv9aEH6fQ%3d&risl=&pid=ImgRaw&r=0'},
    {name: 'Chris Hemsworth', character:'', photo: 'https://cdn.britannica.com/92/215392-050-96A4BC1D/Australian-actor-Chris-Hemsworth-2019.jpg'},
    {name: 'Scarlett Johansson', character:'', photo: 'https://th.bing.com/th/id/R.ff074ea34a97c3efa72755023d1d22b8?rik=SZquXAylTaZ%2bOA&riu=http%3a%2f%2ftheredcarpetreport.files.wordpress.com%2f2011%2f11%2fscarjo.jpg&ehk=KweSNGPsWuY9QFtpGki7M4CzV8jRzBJey0RKLvYOXRY%3d&risl=&pid=ImgRaw&r=0'},
  ]

  originalActors = [...this.actors];

  selectedActors = [];

  columsToShow = ['photo', 'name', 'character', 'actions'];

  @ViewChild(MatTable) table: MatTable<any>

  ngOnInit(): void {
    this.control.valueChanges.subscribe(value => {
      this.actors = this.originalActors.filter(actor =>
        actor.name.toUpperCase().includes(value.toUpperCase()) &&
        !this.selectedActors.some(selectedActor => selectedActor.name === actor.name)
      );
    });
  }


  optionSelected(event: MatAutocompleteSelectedEvent){
    console.log(event.option.value);
    const selectedActor = event.option.value;
    this.selectedActors.push(selectedActor);
    this.control.patchValue('');

    const actorIndex = this.actors.findIndex(actor => actor.name === selectedActor.name);
    if (actorIndex > -1) {
      this.actors.splice(actorIndex, 1);
    }

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
