import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private adminService: AdminService) { }


  userCollection:any =[]
  ngOnInit(): void {

    this.loadUserList();
  }

  loadUserList(){
     this.adminService.getAllUsers().subscribe(data=>{
      this.userCollection = data;
     })
  }

}
