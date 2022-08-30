import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-list-userpurchase',
  templateUrl: './list-userpurchase.component.html',
  styleUrls: ['./list-userpurchase.component.scss']
})
export class ListUserpurchaseComponent implements OnInit {

  uid:any
  movielst:any
  pages=1
   
  constructor(private ar: ActivatedRoute,private userSerivice: UserService) { }

  ngOnInit(): void {
    this.ar.params.subscribe(p => {
      this.uid= p["id"];
      this.getUserMovies(this.uid);
    })
   
  }
  getUserMovies(uid: any) {
    this.userSerivice.getUserMovies(uid).subscribe(data=>{
      this.movielst = data;
      console.log(this.movielst)
    })
  }

}
