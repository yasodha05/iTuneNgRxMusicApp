import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  redirectUrl: string;

  constructor() { }

  isLoggedIn(): boolean {
    const uName: string = localStorage.getItem('uName');
    const pwd: string = localStorage.getItem('pwd');
    if ( uName ) {
      return true;
    }
    return false;
  }

  logIn(username: string, password: string): void {
    localStorage.setItem('uName', username);
    localStorage.setItem('pwd', password);
  }

  logOut() {
    localStorage.clear();
  }
}
