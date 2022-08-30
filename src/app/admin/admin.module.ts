import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { ListTopMoviesComponent } from './list-top-movies/list-top-movies.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    UserListComponent,
    ListTopMoviesComponent,
    AddMovieComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    NgbModule,

  ]
})
export class AdminModule { }
