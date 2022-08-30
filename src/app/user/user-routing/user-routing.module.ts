import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddPurchaseComponent } from '../add-purchase/add-purchase.component';
import { ListUserpurchaseComponent } from '../list-userpurchase/list-userpurchase.component';
import { WriteReviewComponent } from '../write-review/write-review.component';
import { ListReviewComponent } from '../list-review/list-review.component';
import { ListFavoriteComponent } from '../list-favorite/list-favorite.component';


const routes :Routes=[
  {path:'add/:id',component:AddPurchaseComponent},
  {path:'mymovies/:id',component:ListUserpurchaseComponent},
  {path:'review/add', component:WriteReviewComponent},
  {path:'myreviews/:id',component:ListReviewComponent},
  {path:'myfav/:id',component:ListFavoriteComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class UserRoutingModule { }
