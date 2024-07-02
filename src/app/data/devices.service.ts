import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { DevicesResponse } from './devices.interface';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DevicesService {
  http: HttpClient = inject(HttpClient);

  baseUrl: string = 'https://core.nekta.cloud/api/';

  devicesData: any;

  getDevices() {
    const reqData = {
      page: 1,
      last_page: 0,
      sort_field: 'id',
      sort: 'desc',
      search_string: null,
      device_state: 'all',
      is_archived: false,
      paginate: true,
      append_fields: ['active_polling', 'attributes', 'tied_point'],
      per_page: 10,
    };
    return this.http
      .post<DevicesResponse>(
        `${this.baseUrl}device/metering_devices`,
        JSON.stringify(reqData),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .pipe(
        tap((response) => {
          this.devicesData = response.data.metering_devices.data;
          localStorage.setItem('devicesData', this.devicesData);
        })
      );
  }
}
