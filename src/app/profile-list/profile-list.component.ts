import { Component, OnInit } from '@angular/core';

import { User } from '../_models/user';
import {ProfileListService} from '../_services/profile-list.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.css']
})
export class ProfileListComponent implements OnInit {
  user = new User();
  users: User[];

  constructor(
    private profileListService: ProfileListService
  ) {}

  getProfiles(): void {
    this.profileListService.getProfiles()
      .subscribe(profiles => {
        console.log(profiles);
        this.users = profiles;
      });
  }

  ngOnInit() {
    this.getProfiles();
  }

}
