import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  baseUrl = 'http://localhost:8080';

  // baseUrl = 'https://streamlined-beauty-app-api.herokuapp.com';
}
