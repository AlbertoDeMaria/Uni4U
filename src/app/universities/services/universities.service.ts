import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class UniversitiesService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/v1/universities`);
  }

  getAdmin(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/v1/admin/universities`);
  }

  getTypes(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/v1/universities/types`);
  }

  create(payload: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/v1/admin/universities`, payload);
  }

  update(payload: any): Observable<any> {
    return this.http.patch(`${environment.apiUrl}/v1/admin/universities`, payload);
  }

  delete(ids: number[]): Observable<any> {
    return this.http.request('delete', `${environment.apiUrl}/v1/admin/universities`, { body: ids });
  }
}
