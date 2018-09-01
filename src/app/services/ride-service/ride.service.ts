import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from "@angular/http";
import {CONFIG} from "../../config";
import {Ride} from "../../models/ride";

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

  searchRides(departing_from = '', arriving_at = '', departure_time = ''): Promise<any> {
    return this.http.get(
      `${this.apiUrl}/search?departing_from=${departing_from}&arriving_at=${arriving_at}&departure_time=${departure_time}`,
      this.jwt())
      .toPromise()
      .then(res => res.json())
      .catch(err => console.log(err));
  }

  addRide(ride: Ride): Promise<any> {
    return this.http.post(`${this.apiUrl}/rides`, ride, this.jwt())
      .toPromise()
      .then(res => res.json() as Ride)
      .catch(err => console.log(err));
  }

  getRide(ride_id: String): Promise<any> {
    return this.http.get(`${this.apiUrl}/rides/${ride_id}`, this.jwt())
      .toPromise()
      .then(res => res.json())
      .catch(err => console.log(err));
  }

  postUserToRide(ride_id: string): Promise<any> {
    return this.http.post(`${this.apiUrl}/rides/${ride_id}/book`, {}, this.jwt())
      .toPromise()
      .then(res => res.json())
      .catch(err => console.log(err));
  }

  removeUserToRide(ride_id: string, user_id: string): Promise<any> {
    return this.http.delete(`${this.apiUrl}/rides/${ride_id}/${user_id}`, this.jwt())
      .toPromise()
      .then(res => res.json())
      .catch(err => console.log(err));
  }

  // deleteRide(ride_id: string): Promise<any> {
  //   return this.http.delete(`${this.apiUrl}/rides/${ride_id}`, this.jwt())
  //     .toPromise()
  //     .then(res => res.json())
  //     .catch(err => console.log(err));
  // }

}
