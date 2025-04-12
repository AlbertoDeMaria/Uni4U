import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class HealthService {
  constructor(private http: HttpClient, private router: Router) {}

  checkHealth() {
    return this.http.get(environment.apiUrl + '/health', {
      responseType: 'text'
    }).pipe(
      tap(res => {
        console.log('✅ HEALTH OK:', res);
      }),
      catchError(err => {
        console.error('❌ HEALTH ERROR:', err);
        this.router.navigate(['/error']);
        return of(null);
      })
    ).subscribe();
  }

}
