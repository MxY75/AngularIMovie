import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient) { }
  login(loginObj:any){
   return this.http.post('https://localhost:7085/api/Account/login',loginObj)
  }
}
