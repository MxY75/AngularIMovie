import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';
import { MovieDetail } from 'src/app/Interface/MovieDetails'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/service/user.service';
import { FormControl, FormRecord } from '@angular/forms';
import { Review } from 'src/app/Interface/Review';
import { of } from 'rxjs';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [MovieService],
  styles: [`
    .star {
      font-size: 1.5rem;
      color: #b0c4de;
    }
    .filled {
      color: #1e90ff;
    }
    .bad {
      color: #deb0b0;
    }
    .filled.bad {
      color: #ff1e1e;
    }
  `]
})
export class MovieDetailsComponent implements OnInit {

  // review obj
  reviewObj: Review = {
    userid: 0,
    movieid: 0,
    reviewtext: '',
    rating: 0
  }
  //movie obj for show the movie details 
  movieDetail: MovieDetail = {
    backdropUrl: "",
    budget: 0,
    createdBy: "",
    createdDate: "",
    id: 0,
    imdbUrl: "",
    overview: "",
    posterUrl: "",
    price: 0,
    releaseDate: new Date(0),
    revenue: 0,
    runtime: 0,
    tagline: "",
    title: "",
    tmdbUrl: "",
    updateBy: "",
    updatedDate: "",
    genres: [],
    trailers: [],
    casts: []
  }
  // tem varible to recive the data from subsribe 
  movieEntity: any;

  //obj for adding purchase 
  purchaseObj = {
    uid: 0,
    oid: 0
  }
  //like obj for adding favorite
  likeObj = {
    userId: 0,
    movieId: 0
  }
  //is this movie purchase or not 
  isPurchaed = false;
  //temp varibale for user id 
  u: any
  //temp varibale for movie id 
  mid: any
  // //temp varibale for purchase
  mai: any
    // //temp varibale for purchase
    liketemp: any
  // const rating for review rating
  starRating = 5;
  //review text from web
  review = '';
  //collection of moview review get from server
  movieReviews: any
  //innitial page for review
  pages = 1
  // login status
  isLogin = false;
  //is this movie added on favorite or not 
  isFavorite = false;
  isFavorite$ = of(this.isFavorite)
  //cosntructor
  constructor(private modalService: NgbModal,
    private ar: ActivatedRoute,
    private movieSerivice: MovieService,
    private userSerivice: UserService) { }


  ngOnInit(): void {

    //get movie id from pervious page
    this.ar.params.subscribe(p => {
      this.mid = p["id"];
    })
   //show the movie details 
    this.getMovieDetails(this.mid);
    //show the review 
    this.showAllReview(this.mid);
    //if login i will check this movie is purchased or not;
    this.isLogin = localStorage.hasOwnProperty("token");
    if (localStorage.hasOwnProperty("token")) {

      //psssing the value to the temp variables
      this.u = localStorage.getItem("uid");
      this.purchaseObj.uid = parseInt(this.u);
      this.purchaseObj.oid = parseInt(this.mid);
      //chekck is purchase or not 
      this.userSerivice.CheckPurchase(this.purchaseObj).subscribe(bo => {
        this.mai = bo
        this.isPurchaed = this.mai;
      })


      this.likeObj.movieId = this.mid;
      this.likeObj.userId = this.u;
      this.userSerivice.CheckFavorite(this.likeObj).subscribe(d =>{
        console.log("like " + d)
        console.log("uid "+this.likeObj.userId);
        console.log("mid "+this.likeObj.movieId);
        this.liketemp = d;
        this.isFavorite= this.liketemp;
      })
    }
  }

  openLg() {
    this.modalService.open({ size: 'lg' });
  }

  showAllReview(mid: number) {
    this.userSerivice.showAllMoviesReviews(mid).subscribe(data => {
      this.movieReviews = data;
    })
  }
  getfakeip() {
    var ip = (Math.floor(Math.random() * 255) + 1) + "." + (Math.floor(Math.random() * 255)) + "." + (Math.floor(Math.random() * 255)) + "." + (Math.floor(Math.random() * 255));

  }
  addLike(e: Event) {
    if (this.isLogin) {
      this.userSerivice.addFavorite(this.likeObj).subscribe(data => {
        if (data == 1) {
          this.isFavorite = true;
          alert("Added "+ this.movieDetail.title +" to Favorite list!")
          location.reload();
        }
      })
    }
  }
  RemoveLike(e:Event){
    if (this.isLogin) {
      this.userSerivice.deleteFavorite(this.u,this.mid).subscribe(data => {
        console.log(data);
           this.isFavorite = false;
           alert("Delete "+ this.movieDetail.title +" to Favorite list!")
          location.reload();
        
      },error => {
        console.log(error);
      })
    }
  }
  SaveReview(e: Event) {
    if (this.isLogin) {
      this.reviewObj.movieid = this.mid;
      this.reviewObj.userid = this.u;
      this.reviewObj.rating = this.starRating;
      this.reviewObj.reviewtext = this.review;
      this.userSerivice.addReview(this.reviewObj).subscribe(data => {
        if (data == 1) {
          alert("Thank you for your review!")
          setTimeout(() => {
            location.reload();
          }, 1000)

        }
      })
    } else {
      alert("Please Login or regist")
    }
  }
  getMovieDetails(mid: number) {
    this.ar.params.subscribe(p => {
      this.movieSerivice.getMovieDetailById(p["id"]).subscribe(data => {
        this.movieEntity = data;
        this.movieDetail.backdropUrl = this.movieEntity["value"].backdropUrl
        this.movieDetail.budget = this.movieEntity["value"].budget
        this.movieDetail.createdBy = this.movieEntity["value"].createdBy
        this.movieDetail.createdDate = this.movieEntity["value"].createdDate
        this.movieDetail.id = this.movieEntity["value"].id
        this.movieDetail.imdbUrl = this.movieEntity["value"].imdbUrl
        this.movieDetail.overview = this.movieEntity["value"].overview
        this.movieDetail.posterUrl = this.movieEntity["value"].posterUrl
        this.movieDetail.price = this.movieEntity["value"].price
        this.movieDetail.releaseDate = new Date(this.movieEntity["value"].releaseDate)
        this.movieDetail.revenue = this.movieEntity["value"].revenue
        this.movieDetail.runtime = this.movieEntity["value"].runtime
        this.movieDetail.tagline = this.movieEntity["value"].tagline
        this.movieDetail.title = this.movieEntity["value"].title
        this.movieDetail.tmdbUrl = this.movieEntity["value"].tmdbUrl
        this.movieDetail.updateBy = this.movieEntity["value"].updateBy
        this.movieDetail.updatedDate = this.movieEntity["value"].updatedDate
        this.movieDetail.genres = this.movieEntity["value"].genres
        this.movieDetail.trailers = this.movieEntity["value"].trailers
        this.movieDetail.casts = this.movieEntity["value"].casts

      }, err => {
        console.log(err)
      })
    })


  }
}
