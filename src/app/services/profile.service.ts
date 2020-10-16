import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment'
import { HttpClient } from '@angular/common/http';
import { AuthenticationServiceService } from './authentication-service.service';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient,private authenticationService: AuthenticationServiceService) { }

  public getUserProfile(){
    
    return this.httpClient.get(environment.url+"users/profile",)
  }
}
