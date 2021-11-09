import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AccessService {
  private _token?: string;

  constructor(private http: HttpClient) { 
    this._token = window.sessionStorage.getItem("token") || undefined;
  }

  public get isLoggedIn(): boolean {
  return !!this._token;       // !! - pavercia stringa i boolean reiksme
  }

  public setToken(token: string): void {
    this._token = token;

    window.sessionStorage.setItem("token", token);
  }

  public registerUser(user: User): Observable<Object> {
    return this.http.post("http://localhost:3000/api/user/register", user);
  }
 // vietoje observable <any> galim apsirasyti response interface
  public login(user: User): Observable<LoginResponse> {
    return this.http.post<LoginResponse>("http://localhost:3000/api/user/login", user);
  }
}

export interface LoginResponse {
  token: string;
  msg: string;
}
