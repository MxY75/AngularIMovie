import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  loginObj={
    email:'',
    password:''
  }
  
  constructor(private accountService:AccountService,private router:Router) { }

  ngOnInit(): void {
  }

  token:any
  loginUser(loginForm:NgForm){
    this.accountService.login(loginForm.value).subscribe(data=>{
      this.token= data;
      localStorage.setItem("token",this.token["t"]);
      localStorage.setItem("uid",this.token["uid"]);
      localStorage.setItem("auth","admin");
      this.router.navigateByUrl("/movie/list")
    })
  }

}
