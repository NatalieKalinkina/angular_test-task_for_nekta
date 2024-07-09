import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { AuthResponse } from './auth.interface';
import { BASE_API_URL } from '../../utils/consts';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);

  token: string | null = null;

  get isAuth() {
    if (!this.token) {
      this.token = localStorage.getItem('access_token');
    }
    return !!this.token;
  }

  login(payload: { email: string | null; password: string | null }) {
    let data = { ...payload, personal_data_access: true };
    return this.http
      .post<AuthResponse>(`${BASE_API_URL}auth/login`, JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .pipe(
        tap((response) => {
          this.token = response.data.access_token;
          localStorage.setItem('access_token', this.token);
        })
      );
  }

  logout() {
    this.token = null;
    localStorage.clear();
  }
}
