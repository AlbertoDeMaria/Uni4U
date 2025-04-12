import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignInResponse {
  jwt: string;
}

export interface SignUpRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  languageID: number;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  signIn(payload: SignInRequest): Observable<SignInResponse> {
    return this.http.post<SignInResponse>(`${environment.apiUrl}/v1/auth/signin`, payload);
  }

  signUp(payload: SignUpRequest): Observable<any> {
    return this.http.post(`${environment.apiUrl}/v1/auth/signup`, payload);
  }

  signOut(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/v1/auth/signout`);
  }

  refresh(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/v1/auth/refresh`);
  }
}
