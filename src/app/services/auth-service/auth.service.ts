import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import {Router} from "@angular/router";
import {Observable, Subject, BehaviorSubject} from "rxjs";
import {CONFIG} from "../../config";

@Injectable()
export class AuthService {

  private apiUrl: string = CONFIG.api_url;
  private readonly currentUserKey = 'currentUser';

  public loggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private http: Http, private router: Router) {
    if (localStorage.getItem(this.currentUserKey)) {
      this.loggedIn.next(true);
    } else {
      this.loggedIn.next(false);
    }
  }

  public authenticate(ticket: String): Promise<any> {
    return this.http.get(`${this.apiUrl}/auth?ticket=${ticket}`)
      .toPromise()
      .then(res => {
        console.log(res.json);
        let result = res.json();
        console.log(result);
        if (result && result.success) {
          localStorage.setItem(this.currentUserKey, JSON.stringify(result));

          this.loggedIn.next(true);
        } else {
          console.log("Authentication failed")
        }
        return res.json();
      })

      .catch(err => console.log(err));
  }

  public logout(): Promise<any> {
    return new Promise((resolve, reject) => {
      localStorage.removeItem(this.currentUserKey);
      this.loggedIn.next(false);
      alert('Successfully logged out.');
      this.router.navigate(['/']);
      return resolve("Logged out");
    });
  }

  get isLoggedIn() {
    if (localStorage.getItem(this.currentUserKey)) {
      this.loggedIn.next(true);
    } else {
      this.loggedIn.next(false);
    }
    return this.loggedIn.asObservable();
  }

  /**
   * Get the JWT token based on the current user
   */
  public jwt(): RequestOptions {
    const currentUser = this.getCurrentUser()._id;
    if (currentUser && currentUser._id) {
      const headers = new Headers({ 'x-access-token': currentUser.user.token });
      return new RequestOptions({ headers: headers });
    }
  }

  /**
   * Get the current user as stored in the local cache
   */
  public getCurrentUser() {
    const parsedStore = JSON.parse(localStorage.getItem(this.currentUserKey));
    if (parsedStore) {
      return parsedStore.user;
    } else {
      // TODO: error handle
    }
  }
}
