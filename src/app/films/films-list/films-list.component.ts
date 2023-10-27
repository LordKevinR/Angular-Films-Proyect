import { Component, Input, OnInit } from '@angular/core';
import { FilmDTO } from '../films.interface';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {

  constructor() {}
  @Input()
  films: FilmDTO[];


  ngOnInit(): void {

  }

  remove(filmIndex: number): void{
    this.films.splice(filmIndex, 1);
  }

}
