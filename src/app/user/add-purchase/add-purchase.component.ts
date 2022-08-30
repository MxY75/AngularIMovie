import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';



@Component({
  selector: 'app-add-purchase',
  templateUrl: './add-purchase.component.html',
  styleUrls: ['./add-purchase.component.scss']
})
export class AddPurchaseComponent implements OnInit {

  constructor(private ar : ActivatedRoute,private router:Router,private userSerivice:UserService) { }

  purchaseObj ={
    uid:0,
    oid:0
  }
  isPurchaed = false;
   data:any
   u:any
  ngOnInit(): void {
        this.ar.params.subscribe(p=>{
          this.data = p;
          this.purchaseObj.oid = parseInt(this.data.id);
        })

        this.u = localStorage.getItem("uid");
        this.purchaseObj.uid =  parseInt(this.u);
        this.buyMovie(this.purchaseObj);
     
        
  }
  
  buyMovie(purchaseObj:any){

    this.userSerivice.postPurchase(this.purchaseObj).subscribe(data=>{
     if(data == 1 ){
         this.isPurchaed = true;
        
      }

      setTimeout(() => {
        this.router.navigate(['//movie/detail/'+this.data.id]);
       }, 1000)
  
    });
  }


}
