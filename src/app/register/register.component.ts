import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  // regiForm: FormGroup = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPassword:new FormControl('')
  // });
 

  constructor(private B : FormBuilder,private http: HttpClient,private router:Router) { }
  regiForm : FormGroup= this.B.group({
    firstName : ['', [Validators.required, Validators.maxLength(18),Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.maxLength(18),Validators.minLength(2)]],
    email:['',[Validators.email]],
    password :['',[this.passWordVal]],
    confirmPassword:['', [Validators.required]]
  });

  passWordVal(password : FormControl) : object{
     let value = password.value ||'';
     if(!value){
      return{msg : "Please enter password"}
     }else{
      const valid = value.match();
      return valid?{}:{msg:"Passwords must have at least one non alphanumeric character.Passwords must have at least one digit ('0'-'9').Passwords must have at least one uppercase ('A'-'Z')."};
     }
  }

 

  ngOnInit(): void {
  }

  submitForm() {
 
    this.http.post("https://localhost:7085/api/Account/signup",this.regiForm.value).subscribe(data => {
        if(data == 1){
          alert("Usre has been created successfully")
          setTimeout(() => {
            this.router.navigate(['/login']);
           }, 1000)
        }else{
          alert("Sorry....")
        }
    })

  }

}
