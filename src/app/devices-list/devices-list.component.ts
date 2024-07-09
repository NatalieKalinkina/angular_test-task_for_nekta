import { DatePipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { IDevice } from '../data/devices.interface';
import { DevicesService } from '../data/devices.service';
import { MatTableModule } from '@angular/material/table';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-devices-list',
  standalone: true,
  imports: [DatePipe, MatTableModule, MatProgressSpinnerModule, MatIconModule],
  templateUrl: './devices-list.component.html',
  styleUrl: './devices-list.component.css',
})
export class DevicesListComponent {
  devicesService = inject(DevicesService);
  authService = inject(AuthService);

  router = inject(Router);

  devicesList: IDevice[] = [];

  errorMessage: string = '';

  displayedColumns: string[] = ['id', 'name', 'last_active'];

  isDataReceived = signal(false);

  isError = signal(false);

  ngOnInit() {
    this.devicesService
      .getDevices()
      .pipe(
        catchError(() => {
          this.isError.set(true);
          this.errorMessage = 'На сервере произошла ошибка';
          return throwError(
            () => new Error('Что-то пошло не так. Попробуйте позже')
          );
        })
      )
      .subscribe((response) => {
        this.devicesList = response.data.metering_devices.data;
        localStorage.setItem('DevicesData', JSON.stringify(this.devicesList));
        this.isDataReceived.set(true);
      });
  }

  logout() {
    this.authService.logout();
    this.router.navigate([''], { replaceUrl: true });
  }
}
