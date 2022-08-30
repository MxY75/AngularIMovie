import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from '../user-list/user-list.component';
import { AddMovieComponent } from '../add-movie/add-movie.component';
import { ListTopMoviesComponent } from '../list-top-movies/list-top-movies.component';

const router:Routes =[
  {path:'list',component:UserListComponent},
  {path:'topMovie',component:ListTopMoviesComponent},
  {path:'addmovie',component:AddMovieComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(router)
  ]
})
export class AdminRoutingModule { }
