import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient);

  baseUrl: string = 'https://core.nekta.cloud/api/';

  login(payload: { email: string | null; password: string | null }) {
    let data = { ...payload, personal_data_access: true };
    return this.http.post(`${this.baseUrl}auth/login`, JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
