import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthenticationServiceService} from '../services/authentication-service.service'
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public returnUrl: string;

  constructor( private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    private router: Router,private auth : AuthenticationServiceService) { 
      // redirect to home if already logged in
      if (this.auth.userValue) { 
        this.router.navigate(['/']);
    }
    }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }

  
  onSubmit() {
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    this.spinner.show();
    this.auth.login(this.loginForm.value)
        .subscribe(
            data => {
             if(data.role == "Admin"){
               this.router.navigate(['/admin'])
             }else{
              this.router.navigate([this.returnUrl]);
              console.log(data)
              localStorage.setItem("email",data.email)
             }
                this.spinner.hide()
            },
            error => {
                console.log("err",error);
            });
}
}
