import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-list-review',
  templateUrl: './list-review.component.html',
  styleUrls: ['./list-review.component.scss']
})
export class ListReviewComponent implements OnInit {

  uid: any
  reviewlst:any

  constructor(private ar: ActivatedRoute,private userSerivice: UserService) { 
    

  }

  ngOnInit(): void {
    this.ar.params.subscribe(p => {
      this.uid= p["id"];
      this.getUserReview(this.uid);
    })
   
  }
  getUserReview(uid: any) {
    this.userSerivice.getUserReviews(uid).subscribe( d=>{
        this.reviewlst = d;
    })
  }

}
