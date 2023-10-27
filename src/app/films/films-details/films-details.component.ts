import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../films.service';
import { ActivatedRoute } from '@angular/router';
import { FilmDTO } from '../films.interface';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ILocationWithMessage } from 'src/app/utilities/map/location.interface';

@Component({
  selector: 'app-films-details',
  templateUrl: './films-details.component.html',
  styleUrls: ['./films-details.component.css']
})
export class FilmsDetailsComponent implements OnInit {

  constructor(private filmsService: FilmsService,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer) { }

  film: FilmDTO;
  releaseDate: Date;
  trailerURL: SafeResourceUrl;
  location: ILocationWithMessage[];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.filmsService.getById(params.id).subscribe(film => {
        console.log(film);
        this.film = film;
        this.releaseDate = new Date(film.releaseDate);
        this.trailerURL = this.generateURLYoutubeEmbed(film.trailer);
        this.location = film.theaters.map(t => {
          return { longitude: t.longitude, latitude: t.latitude, message: t.name}
        });
      });
    })
  }

  generateURLYoutubeEmbed(url: any): SafeResourceUrl {
    if (!url){
      return '';
    }

    var video_id = url.split('v=')[1];
    var ampersandPosition = video_id.indexOf('&');
    if (ampersandPosition != -1) {
      video_id = video_id.substring(0, ampersandPosition);
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${video_id}`);

  }

}
