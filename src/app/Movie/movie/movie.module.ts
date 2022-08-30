import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieRoutingModule } from '../movie-routing/movie-routing.module';
import { FormsModule } from '@angular/forms';
import { MovieService } from 'src/app/service/movie.service';
import { ListMovieComponent } from '../list-movie/list-movie.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbRatingModule} from '@ng-bootstrap/ng-bootstrap'; 
import { NumberFormatPipe }     from '../../pipe/number.pipe';



@NgModule({
  declarations: [
    ListMovieComponent,
    MovieDetailsComponent,
    NumberFormatPipe
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    FormsModule, 
    HttpClientModule,
    NgbModule,
    NgbRatingModule,
    NgxPaginationModule
    
  ],
  exports:[NgxPaginationModule,MovieDetailsComponent,NumberFormatPipe],
  providers:[MovieService,NumberFormatPipe],
  bootstrap:[MovieDetailsComponent]

  
})
export class MovieModule { }
