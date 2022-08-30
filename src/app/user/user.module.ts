import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing/user-routing.module';
import { AddPurchaseComponent } from './add-purchase/add-purchase.component';
import { UserService } from '../service/user.service';
import { ListUserpurchaseComponent } from './list-userpurchase/list-userpurchase.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { WriteReviewComponent } from './write-review/write-review.component';
import { ListReviewComponent } from './list-review/list-review.component';
import { ListFavoriteComponent } from './list-favorite/list-favorite.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserPorfileComponent } from './user-porfile/user-porfile.component';





@NgModule({
  declarations: [
    AddPurchaseComponent,
    ListUserpurchaseComponent,
    UserProfileComponent,
    WriteReviewComponent,
    ListReviewComponent,
    ListFavoriteComponent,
    UserPorfileComponent,
    
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    UserRoutingModule
  ],
  providers:[UserService]
})
export class UserModule { }
