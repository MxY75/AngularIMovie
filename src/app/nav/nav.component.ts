import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserBasic } from '../Interface/UserBasic';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private userService: UserService, private ar: ActivatedRoute) {
    //if has the token add logout
    this.showLogout = localStorage.hasOwnProperty("token")
  }

  userInfo: UserBasic = {
    id: 0,
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: ""
  }
  uif: any;
  showLogout = false;
  isAdmin = false;
  u: any;
  genre: any;
  ngOnInit(): void {
    this.getGenreList();

    if (localStorage.hasOwnProperty("auth")) {
      this.isAdmin = true;
      this.u = localStorage.getItem("uid");
      this.getUserInfo(this.u);

    }
    else if (localStorage.hasOwnProperty("regu")) {
      this.u = localStorage.getItem("uid");
      this.getUserInfo(this.u);
      this.showLogout = true;
    }
  }
  getGenreList() {
    this.http.get("https://localhost:7085/api/Genres/getAllGenre").subscribe(data => {
      this.genre = data
    })
  }

  logout() {
    localStorage.clear();
      alert("See you!")
      this.showLogout = false;
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 1000)
  }
  getUserInfo(uid: any) {
    this.userService.getUserInfo(uid).subscribe(data => {
      this.uif = data;
      this.userInfo.id = this.uif.id
      this.userInfo.email = this.uif.email
      this.userInfo.firstname = this.uif.firstName
      this.userInfo.lastname = this.uif.lastName
      this.userInfo.phonenumber = this.uif.phoneNumber
    })

  }
}
