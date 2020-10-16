import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../services/profile.service'
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
public profile : any[]= [];
  constructor(private Userprofile :ProfileService) { }

  ngOnInit(): void {
    this.Userprofile.getUserProfile().subscribe(data => {
       this.profile.push(data) 
      console.log(this.profile);

    })
  }

}
