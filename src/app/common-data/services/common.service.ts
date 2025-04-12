import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CommonService {
  constructor(private http: HttpClient) {}

  getCities(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/v1/cities`);
  }

  getLanguages(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/v1/languages`);
  }
}
