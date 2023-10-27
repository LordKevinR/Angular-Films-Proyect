import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../films/films.service';
import { FilmDTO } from '../films/films.interface';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private filmsService: FilmsService) {}

  ngOnInit(): void {
    this.filmsService.getLandingPage().subscribe(
      (data) => {
        this.filmsInTheaters = data.inTheaters;
        this.filmsUpcoming = data.nextReleases;
      }
    );

  }

  filmsInTheaters: FilmDTO[];

  filmsUpcoming: FilmDTO[];
}
