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
export class DataService {
  locations = ['Pick a location', 'Acworth', 'Cartersville', 'Kennesaw', 'Marietta', 'Smyrna'];
  serviceTypes = ['Pick a pro', 'Barber', 'Cosmetologist', 'Esthetician', 'Make-Up Artist', 'Nail Specialist'];


  constructor(
    private http: HttpClient,
    private baseService: BaseService
  ) {}


}
