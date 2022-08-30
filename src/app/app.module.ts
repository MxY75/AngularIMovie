import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import{ HttpClientModule, HTTP_INTERCEPTORS} from'@angular/common/http';
import { MovieModule } from './Movie/movie/movie.module';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { CommonInterceptor } from './interceptors/common.interceptor';
import { LoginComponent } from './login/login.component';
import { GenreComponent } from './genre/genre.component';
import { NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { RegisterComponent } from './register/register.component';




@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
   // EmployeeEditComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    GenreComponent,
    AdminLoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MovieModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    UserModule,
    AdminModule,
    BrowserModule, 
    ReactiveFormsModule,
    NgbDatepickerModule 

  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,useClass:CommonInterceptor,multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
