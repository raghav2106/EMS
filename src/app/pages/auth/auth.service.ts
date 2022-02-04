import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class Tokens {
  jwt: string
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly REFRESH_TOKEN = 'REFRESH_TOKEN';
  private loggedUser: string;
  private tokens: Tokens;
  private jwt: string;

  baseUrl = '/test'

  constructor(private router: Router) {}

  login(username: string, password: string): any {
    return username;
  }

  logout() {
    console.log('logout');
    this.doLogoutUser(), this.router.navigate(['/login']);
  }

  isLoggedIn() {
    debugger;
    return !!this.getJwtToken();
  }

  

  getJwtToken() {
    this.jwt = localStorage.getItem(this.JWT_TOKEN);
    if (this.jwt != null && this.jwt != '' && this.jwt !== 'undefined') {
      return this.jwt;
    } else {
      this.doLogoutUser();
      return false;
    }
  }
  doLoginUser(tokens: Tokens) {
    if (tokens.jwt != null && tokens.jwt != '' && tokens.jwt != undefined) {
      this.storeTokens(tokens);
    }
  }

  private storeTokens(userId: any) {
    localStorage.setItem(this.JWT_TOKEN, userId);
  }

  public doLogoutUser() {
    this.loggedUser = null;
    this.removeTokens();
  }

  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.clear();
    this.doLogoutUser(), this.router.navigate(['/login']);
  }
}
