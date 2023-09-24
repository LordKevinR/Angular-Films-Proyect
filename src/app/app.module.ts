import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { MatButtonModule } from '@angular/material/button'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown'
import { LeafletModule } from '@asymmetrik/ngx-leaflet'
import { HttpClientModule } from '@angular/common/http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { GenericListComponent } from './utilities/generic-list/generic-list.component';
import { RatingComponent } from './utilities/rating/rating.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GenresIndexComponent } from './genres/genres-index/genres-index.component';
import { GenresCreateComponent } from './genres/genres-create/genres-create.component';
import { GenresEditComponent } from './genres/genres-edit/genres-edit.component';
import { ActorsIndexComponent } from './actors/actors-index/actors-index.component';
import { ActorsCreateComponent } from './actors/actors-create/actors-create.component';
import { ActorsEditComponent } from './actors/actors-edit/actors-edit.component';
import { FilmsListComponent } from './films/films-list/films-list.component';
import { FilmsCreateComponent } from './films/films-create/films-create.component';
import { FilmsEditComponent } from './films/films-edit/films-edit.component';
import { TheatersCreateComponent } from './theaters/theaters-create/theaters-create.component';
import { TheatersIndexComponent } from './theaters/theaters-index/theaters-index.component';
import { TheatersEditComponent } from './theaters/theaters-edit/theaters-edit.component';
import { GenreFormComponent } from './genres/genre-form/genre-form.component';
import { FilmsFilterComponent } from './films/films-filter/films-filter.component';
import { ActorsFormComponent } from './actors/actors-form/actors-form.component';
import { InputImgComponent } from './utilities/input-img/input-img.component';
import { InputMarkdownComponent } from './utilities/input-markdown/input-markdown.component';
import { TheatersFormComponent } from './theaters/theaters-form/theaters-form.component';
import { MapComponent } from './utilities/map/map.component';
import { FilmsFormComponent } from './films/films-form/films-form.component';
import { MultipleSelectorComponent } from './utilities/multiple-selector/multiple-selector.component';
import { ActorsAutocompleteComponent } from './actors/actors-autocomplete/actors-autocomplete.component';
import { ShowErrorsComponent } from './utilities/show-errors/show-errors.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmsListComponent,
    GenericListComponent,
    NavbarComponent,
    RatingComponent,
    LandingPageComponent,
    GenresIndexComponent,
    GenresCreateComponent,
    ActorsIndexComponent,
    ActorsCreateComponent,
    FilmsCreateComponent,
    TheatersCreateComponent,
    TheatersIndexComponent,
    ActorsEditComponent,
    GenresEditComponent,
    TheatersEditComponent,
    FilmsEditComponent,
    GenreFormComponent,
    FilmsFilterComponent,
    ActorsFormComponent,
    InputImgComponent,
    InputMarkdownComponent,
    TheatersFormComponent,
    MapComponent,
    FilmsFormComponent,
    MultipleSelectorComponent,
    ActorsAutocompleteComponent,
    ShowErrorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MarkdownModule.forRoot(),
    LeafletModule,
    HttpClientModule,
    SweetAlert2Module.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
