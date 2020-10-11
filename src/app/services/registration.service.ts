import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment'
import {UserModel} from '../model/userModel'

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpClient: HttpClient) { }

  public registerUser(userModel:UserModel) {
     return this.httpClient.post(environment.url+"users/register/",userModel)
  }
}
