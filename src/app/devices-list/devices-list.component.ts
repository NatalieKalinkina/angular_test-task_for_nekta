import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IDevice } from '../data/devices.interface';
import { DevicesService } from '../data/devices.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-devices-list',
  standalone: true,
  imports: [DatePipe, MatTableModule],
  templateUrl: './devices-list.component.html',
  styleUrl: './devices-list.component.css',
})
export class DevicesListComponent {
  devicesService = inject(DevicesService);

  devicesList: IDevice[] = [];

  displayedColumns: string[] = ['id', 'name', 'last_active'];

  ngOnInit() {
    this.devicesService.getDevices().subscribe((response) => {
      this.devicesList = response.data.metering_devices.data;
      localStorage.setItem('DevicesData', JSON.stringify(this.devicesList));
    });
  }
}
