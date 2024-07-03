import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { DevicesResponse } from './devices.interface';
import { tap } from 'rxjs';
import { BASE_API_URL, DEVICES_REQ_DATA } from '../../utils/consts';

@Injectable({
  providedIn: 'root',
})
export class DevicesService {
  http: HttpClient = inject(HttpClient);

  devicesData: any;

  getDevices() {
    return this.http.post<DevicesResponse>(
      `${BASE_API_URL}device/metering_devices`,
      JSON.stringify(DEVICES_REQ_DATA),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}
