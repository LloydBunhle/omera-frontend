import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../services/registration.service'
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-mechanic',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {
  public updateUser: FormGroup;
  public id: string;
  constructor(private formBuilder: FormBuilder, private admiRequest: RegistrationService,private route: ActivatedRoute,private router: Router ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.admiRequest.getAdminById(this.id).subscribe(data => {
       this.updateUser.setValue(data)
    },err => {
      console.log(err);
    })
    this.updateMechanicform()
  }

  public updateMechanicform() {
    this.updateUser = this.formBuilder.group({
      _id:[''],
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    })
  }

  public onSubmit() {
    this.admiRequest.updateAdmin(this.updateUser.value).subscribe(data => {
      console.log("successfully updated")
      this.router.navigate(['/admin']);
      this.alertMessage()
    }, err => {
      console.log(err)
    })

  }
  public alertMessage(){
    Swal.fire({
      icon: 'success',
      title: 'Profile updated',
    })
  }

}
