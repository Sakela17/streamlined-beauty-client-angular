import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User, UserService } from '../_models/user';
import { BaseService } from './base.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

// const baseUrl = 'https://streamlined-beauty-app-api.herokuapp.com';

@Injectable({
    providedIn: 'root'
})
export class ProfileListService {
  constructor(
    private http: HttpClient,
    private baseService: BaseService
  ) {}

  profilesUrl = this.baseService.baseUrl + '/api/profiles';

  getProfiles():  Observable<User[]>  {
    return this.http.get<User[]>(this.profilesUrl);
  }

  getProfileById(id):  Observable<User>  {
    return this.http.get<User>(this.profilesUrl + '/' + id);
  }

  getUserServicesById(id): Observable<UserService[]> {
    return this.http.get<UserService[]>(this.profilesUrl + '/services/' + id);
  }

}
