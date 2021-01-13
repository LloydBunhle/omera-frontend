import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../services/registration.service'
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  public registerUser: FormGroup;
  constructor(private formBuilder: FormBuilder, private registerService: RegistrationService,private router: Router) { }

  ngOnInit(): void {
    this.registerUserform();
  }

  public registerUserform() {
    this.registerUser = this.formBuilder.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  public onSubmit() {
    console.log(this.registerUser.value)
    this.registerService.addNewAdmin(this.registerUser.value).subscribe(data => {
      console.log(data)
    }, () => {
      console.log("something went wrong")
    })
    this.alertMessage()
   this.registerUser.reset()
  }

  public alertMessage(){
    Swal.fire({
      icon: 'success',
      title: 'Succesfully registered',
    })
  }
  

}
