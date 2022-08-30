import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {

  pages :number = 1;
  data:any 
  constructor(private http:HttpClient,private ar : ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllMovieByGenre()
  }
   getAllMovieByGenre(){
      this.ar.params.subscribe(d =>{
        this.http.get("https://localhost:7085/api/Genres/MoviesByGenre?gid="+d['id']).subscribe(lst =>{
          this.data = lst;
          console.log(this.data);
        })
      })
   }
}
