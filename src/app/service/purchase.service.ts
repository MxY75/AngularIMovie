import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  PurchaseUrl = environment.baseUrl

  constructor(private http:HttpClient) {
    
   }

   getMovieDetailById(id:any){
    return this.http.get(this.PurchaseUrl+"/MovieDetail?id="+id);
  }
  
}
