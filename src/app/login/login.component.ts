import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
      localStorage.setItem("regu","regu")
      this.router.navigateByUrl("/movie/list")
    })
  }

}
