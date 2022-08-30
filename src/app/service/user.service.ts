import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  UserUrl = environment.baseUrl+environment.controllers.user;

  constructor(private http:HttpClient) {
    
   }
//example
   postPurchase(purhaseObj:any){
    //https://localhost:7085/api/User/addPurchase?uid=1&mid=222
    return this.http.post(this.UserUrl+"/addPurchase",purhaseObj);
  }

  CheckPurchase(purhaseObj:any){
    return this.http.post(this.UserUrl+"/CheckisPurchased",purhaseObj);
  }
  getUserInfo(uid :number){
    return this.http.get(this.UserUrl+"/GetUserInfoByUid?uid="+uid);
  }

  getUserMovies(uid:number){
    return this.http.get(this.UserUrl+"/GetAllPurchaseByuserId?id="+uid);
  }
  addReview(reviewObj:any){
    
    return this.http.post(this.UserUrl+"/AddRview",reviewObj);
  }

  showAllMoviesReviews(mid:number){
    return this.http.get(this.UserUrl+"/MovieAllReview?mid="+mid);
  }

  addFavorite(favObj:any){
    return this.http.post(this.UserUrl+"/addFavorite",favObj);
  } 
  
  deleteFavorite(uid:any,mid:any){
    return this.http.delete("https://localhost:7085/api/User/removieFavorite?uid="+uid+"&mid="+mid);
  }
  CheckFavorite(favObj:any){
    return this.http.post(this.UserUrl+"/CheckisFavorite",favObj);
  }
  getUserReviews(uid:any){
    return this.http.get(this.UserUrl+"/UserAllReview?uid="+uid);
  }
  showAllMoviesFavorite(uid:any){
    return this.http.get(this.UserUrl+"/UserAllFavorites?id="+uid)
  }

}
