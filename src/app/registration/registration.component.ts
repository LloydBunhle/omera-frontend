import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../services/registration.service'
import Swal from 'sweetalert2'


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public registerUser: FormGroup;
  constructor(private formBuilder: FormBuilder, private registerService: RegistrationService) { }

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
    this.registerService.registerUser(this.registerUser.value).subscribe(data => {
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
