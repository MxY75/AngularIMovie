import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
   MovieUrl = environment.baseUrl+environment.controllers.movie;

  constructor(private http:HttpClient) {
   }
   getAllMovies() {
    return this.http.get(this.MovieUrl+"/ShowAllMovies");
  }
  getMovieById(id:any){
    return this.http.get(this.MovieUrl+"?id="+id);
  }
  getMovieDetailById(id:any){
    return this.http.get(this.MovieUrl+"/MovieDetail?id="+id);
  }
  

}
