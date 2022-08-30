import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  adminUrl = environment.baseUrl+environment.controllers.admin;
  constructor(private http:HttpClient) { }
  

  getAllUsers(){
    return this.http.get(this.adminUrl+"/GetAllUsers");
  }

  getTop30Movies(){
    return this.http.get(this.adminUrl+"/Top30RatedMovie");
  }
  addMovie(movieObj:any){
    return this.http.post("https://localhost:7085/api/Movie/addMovie",movieObj)
  }
  popularPurchaseMovieFromto(fromdate:any, todate:any){
    return this.http.get("https://localhost:7085/api/Report/topPurchase?fromDate="+fromdate+"&toDate="+todate);
  }
}
