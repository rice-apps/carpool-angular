import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../models/user';
import {UserService} from '../../services/user-service/user.service';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';


@Component({
  selector: 'app-user-profile-edit',
  templateUrl: './user-profile-edit.component.html',
  styleUrls: ['./user-profile-edit.component.css']
})
export class UserProfileEditComponent implements OnInit {

  public fullyLoaded: Promise<boolean>;
  public userForm: FormGroup;
  public user: User;

  constructor(private fb: FormBuilder, private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      phone_number: [''],
    });

    this.route.params.subscribe(async params => {
      // Reroute if the parameter is undefined
      // if (!params['_id'] || params['_id'] === '') {
      //   this.router.navigate(['/profileerror']);
      // }

      // Get current user
      this.user = await this.userService.getUserProfile(params['_id']);

      // If the user does not exist, redirect
      //if (!this.user) {
        //this.router.navigate(['/profileerror']);
       // return;
      //}

      this.fullyLoaded = Promise.resolve(true);
    });
  }

  /**
   * Submit to edit profile endoint
   */
  submit() {
    this.user.first_name = this.userForm.value['first_name'] || this.user.first_name;
    this.user.last_name = this.userForm.value['last_name'] || this.user.last_name;
    this.user.phone = this.userForm.value['phone_number'] || this.user.phone;
    this.userService.editUserProfile(this.user)
      .then((user) => {
        this.router.navigate([`/profile/${this.user._id}`]);
      });
  }

}
