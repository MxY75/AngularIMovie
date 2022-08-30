import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { MovieInsert } from 'src/app/Interface/MovieInsert';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
  providers: [AdminService]
})
export class AddMovieComponent implements OnInit {


  movie: MovieInsert = {
    backdropUrl: "",
    budget: 0,
    createdDate: "",
    imdbUrl: "",
    overview: "",
    posterUrl: "",
    releaseDate: new Date(0),
    revenue: 0,
    runtime: 0,
    tagline: "",
    title: "",
    tmdbUrl: "",
    updatedDate: "",
    originalLanguage: ""
  }
  lanlst = ['en', 'fr', 'sp']
  constructor(private admin:AdminService) { }

  ngOnInit(): void {
  }

  saveMovie(movieForm: NgForm) {
    this.admin.addMovie(movieForm.value).subscribe(d=>{
      console.log(d);
    })
  }

  ResetForm(movieForm: NgForm) {

  }

  loadData(movieForm: NgForm) {
    let movieData = {
      backdropUrl: "backdropUrl",
      budget: 0,
      createdDate: "2011-11-14",
      imdbUrl: "imdbUrl",
      overview: "Overview....",
      posterUrl: "posterUrl",
      releaseDate: new Date(0),
      revenue: 0,
      runtime: 0,
      tagline: "Tagline...",
      title: "Movie title",
      tmdbUrl: "tmdbUrl",
      updatedDate: "2011-11-14",
      originalLanguage:"en"
    }
    movieForm.setValue(movieData)
  }
}

