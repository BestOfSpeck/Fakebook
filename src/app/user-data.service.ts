import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private apiUrl = 'https://randomuser.me/api/';
  isLoggedIn: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

  getRandomUser(): Observable<any> {
    return this.http.get(this.apiUrl + '?results=50');
  }

  login() {
    this.isLoggedIn = true;
  }

  getRoute(path: string) {
    this.router.navigate([path]);
  }
}
