import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-list-favorite',
  templateUrl: './list-favorite.component.html',
  styleUrls: ['./list-favorite.component.scss']
})
export class ListFavoriteComponent implements OnInit {

  constructor(private ar: ActivatedRoute, private userSerivice: UserService) { }


  uid: any
  userfav:any
  favoritelst: any
  pages =1

  ngOnInit(): void {
    this.ar.params.subscribe(p => {
      this.uid = p["id"];
      this.getUserFavorite(this.uid);
    })
  }
  getUserFavorite(uid: any) {
    this.userSerivice.showAllMoviesFavorite(uid).subscribe(data => {
      this.userfav = data
      this.favoritelst = this.userfav["favoriteMovies"]
      console.log(this.favoritelst)
    })
  }

}
