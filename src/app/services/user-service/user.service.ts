import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from "@angular/http";
import {CONFIG} from "../../config";
import {User} from '../../models/user';
import {Router} from "@angular/router";
import {AuthService} from '../auth-service/auth.service';

@Injectable()
export class UserService {

  private readonly apiUrl: string = CONFIG.api_url;

  constructor(private http: Http, private router: Router, private authService: AuthService) {
  }

  /**
   * Get the user's profile from the backend
   * @param id ID of the user
   */
  public getUserProfile(id: String): Promise<any> {
    return this.http.get(`${this.apiUrl}/users/${id}`, this.authService.jwt())
      .toPromise()
      .then(res => res.json())
      .catch(err => console.log(err));
  }

  /**
   * Edit a user's profile in the backend
   * @param user
   */
  public editUserProfile(newUserProfile: User): Promise<any> {
    return this.http.put(`${this.apiUrl}/users/${newUserProfile._id}/edit`, newUserProfile, this.authService.jwt())
      .toPromise()
      .then(res => res.json())
      .catch(err => console.log(err));
  }
}
