import { Component, OnInit } from '@angular/core';

import { ProfileListService } from '../_services/profile-list.service';
import { Routes, ActivatedRoute } from '@angular/router';


import { User, UserService } from '../_models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css', '../profile-list/profile-list.component.css']
})
export class ProfileComponent implements OnInit {
  user = new User();
  userServices: UserService[];

  constructor(
    private route: ActivatedRoute,
    private profileListService: ProfileListService
  ) { }

  getProfileById(id): void {
    this.route.params.subscribe(params => {
      this.profileListService.getProfileById(params['id'])
        .subscribe(user => {
          console.log('USER', user);
          this.user = user;
        });

    });

  }



  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.profileListService.getProfileById(params['id'])
        .subscribe(user => {
          console.log('USER', user);
          this.user = user;
        });
      this.profileListService.getUserServicesById(params['id'])
        .subscribe(services => {
          console.log('SERVICES', services);
          this.userServices = services;
        });
    });
  }


}
