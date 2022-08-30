import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { combineLatest } from 'rxjs';
import { MovieDetailsComponent } from './Movie/movie-details/movie-details.component';
import { ListMovieComponent } from './Movie/list-movie/list-movie.component';
import { MovieModule } from './Movie/movie/movie.module';
import { AdminGuard } from './mguard/admin.guard';
import { AuthGuard } from './mguard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { GenreComponent } from './genre/genre.component';
import { UserModule } from './user/user.module';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { RegisterComponent } from './register/register.component';





const routes: Routes = [

  {
    path: 'genre',
    children: [
      {
        path: 'genremovie/:id',
        component: GenreComponent
      },
    ]
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),

  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },

  {
    path: 'movie',
    loadChildren: () => import('./Movie/movie/movie.module').then(m => m.MovieModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'home',
    component: HomeComponent,
    // canActivate:[AdminGuard]
  },
  { path: "login", component: LoginComponent },

  { path: "register", component: RegisterComponent },

  { path: "adminlogin", component: AdminLoginComponent },

  { path: '', component: LoginComponent },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
