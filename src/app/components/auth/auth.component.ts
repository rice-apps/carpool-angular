import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth-service/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../models/user';
import {UserService} from '../../services/user-service/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: 'auth.component.html',
  styleUrls: ['auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.authService.authenticate(params['ticket'])
        .then((res) => {
          console.log(res);
           if (res.user.first_name == null) {
            this.router.navigate(['/profile/'+res.user._id+'/edit']);
          } else {
          this.router.navigate(['/rides']);
          }

        })
        .catch(err => console.log(err));
    });
  }

}
