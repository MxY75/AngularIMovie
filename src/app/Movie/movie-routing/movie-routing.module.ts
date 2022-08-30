import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListMovieComponent } from '../list-movie/list-movie.component';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';

const routes : Routes =[
  {path:'list', component:ListMovieComponent},
  { path:'detail/:id',component: MovieDetailsComponent}]
@NgModule({

  imports:  [RouterModule.forChild(routes)
 ],
  exports:[RouterModule]

})
export class MovieRoutingModule { }
