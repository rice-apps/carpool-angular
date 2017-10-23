import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from "@angular/http";
import {CONFIG} from "../../config";

@Injectable()
export class RideService {

  constructor(private http: Http) { }

  private apiUrl: string = CONFIG.api_url;

  private jwt() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.user.token) {
      let headers = new Headers({ 'x-access-token': currentUser.user.token });
      return new RequestOptions({ headers: headers });
    }
  }

  getRides(): Promise<any> {
    return this.http.get(`${this.apiUrl}/rides`, this.jwt())
      .toPromise()
      .then(res => res.json())
      .catch(err => console.log(err));
  }

}
