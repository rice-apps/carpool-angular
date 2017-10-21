import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from "@angular/http";

@Injectable()
export class RideServiceService {

  constructor(private http: Http) { }

  private jwt() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.user.token) {
      let headers = new Headers({ 'x-access-token': currentUser.user.token });
      return new RequestOptions({ headers: headers });
    }
  }
  
}
