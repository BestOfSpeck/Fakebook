import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  private apiUrl = 'https://randomuser.me/api/';
  isLoggedIn: boolean = false;

  constructor(private http: HttpClient, private router: Router, private auth: Auth) {}

  getRandomUser(): Observable<any> {
    return this.http.get(this.apiUrl + '?results=50');
  }

  handleLogin(value:any) {
    this.isLoggedIn = true;
  signInWithEmailAndPassword(this.auth, value.email, value.password)
  }

  getRoute(path: string) {
    this.router.navigate([path]);
  }
}
