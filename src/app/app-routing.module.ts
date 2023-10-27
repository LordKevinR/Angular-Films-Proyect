import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { GenresIndexComponent } from './genres/genres-index/genres-index.component';
import { GenresCreateComponent } from './genres/genres-create/genres-create.component';
import { ActorsIndexComponent } from './actors/actors-index/actors-index.component';
import { ActorsCreateComponent } from './actors/actors-create/actors-create.component';
import { ActorsEditComponent } from './actors/actors-edit/actors-edit.component';
import { TheatersIndexComponent } from './theaters/theaters-index/theaters-index.component';
import { TheatersCreateComponent } from './theaters/theaters-create/theaters-create.component';
import { FilmsCreateComponent } from './films/films-create/films-create.component';
import { FilmsFilterComponent } from './films/films-filter/films-filter.component';
import { FilmsEditComponent } from './films/films-edit/films-edit.component';
import { TheatersEditComponent } from './theaters/theaters-edit/theaters-edit.component';
import { GenresEditComponent } from './genres/genres-edit/genres-edit.component';
import { FilmsDetailsComponent } from './films/films-details/films-details.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'genres', component: GenresIndexComponent},
  {path: 'genres/create', component: GenresCreateComponent},
  {path: 'genres/edit/:id', component: GenresEditComponent},
  {path: 'actors', component: ActorsIndexComponent},
  {path: 'actors/create', component: ActorsCreateComponent},
  {path: 'actors/edit/:id', component: ActorsEditComponent},
  {path: 'theaters', component: TheatersIndexComponent},
  {path: 'theaters/create', component: TheatersCreateComponent},
  {path: 'theaters/edit/:id', component: TheatersEditComponent},
  {path: 'films/create', component: FilmsCreateComponent},
  {path: 'films/edit/:id', component: FilmsEditComponent},
  {path: 'films/search', component: FilmsFilterComponent},
  {path: 'films/:id', component: FilmsDetailsComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
