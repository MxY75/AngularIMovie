import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss']
})
export class ListMovieComponent implements OnInit {
pages :number = 1;
dataSet :any;
  constructor(private movieService :MovieService) { }

  ngOnInit(): void {

    this.getAllMovies();
  }

  getAllMovies() {
   this.movieService.getAllMovies().subscribe(data =>{
    this.dataSet =data
  });
  }
  

}
