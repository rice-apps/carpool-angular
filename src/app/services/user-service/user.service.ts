import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from "@angular/http";
import {CONFIG} from "../../config";
import {User} from '../../models/user';
// import {User} from "../../models/user";

@Injectable()
export class UserService {

  constructor(private http: Http) { }
  private apiUrl: string = CONFIG.api_url;

  private jwt() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.user.token) {
      let headers = new Headers({ 'x-access-token': currentUser.user.token });
      return new RequestOptions({ headers: headers });
    }
  }


  // get user information from backend
  getUser(username: String): Promise<any> {
    return this.http.get(`${this.apiUrl}/users/${username}`, this.jwt())
      .toPromise()
      .then(res => res.json())
      .catch(err => console.log(err));
  }

  editUser(user: User): Promise<any> {
    return this.http.put(`${this.apiUrl}/users/${user.username}/edit`, user, this.jwt())
      .toPromise()
      .then(res => res.json())
      .catch(err => console.log(err));
  }
}
