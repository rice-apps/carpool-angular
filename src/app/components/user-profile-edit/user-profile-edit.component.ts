import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../models/user';
import {UserService} from "../../services/user-service/user.service";
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";


@Component({
  selector: 'app-user-profile-edit',
  templateUrl: './user-profile-edit.component.html',
  styleUrls: ['./user-profile-edit.component.css']
})
export class UserProfileEditComponent implements OnInit {

  newUserForm: FormGroup;
  newUser: User;
  // tempUser: User;

  constructor(private fb: FormBuilder, private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.newUserForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      phone_number: ['', Validators.required],
    });
    this.route.params.subscribe(params => {
      this.userService.getSelf(params['username'])
        .then(user => this.newUser = user);
    });
  }

  submit() {

    this.newUser.first_name = this.newUserForm.value['first_name'];
    this.newUser.last_name = this.newUserForm.value['last_name'];
    this.newUser.phone = this.newUserForm.value['phone_number'];
    this.userService.editUser(this.newUser)
      .then((user) => {
        this.router.navigate(['/rides']);
      });

  }

}
