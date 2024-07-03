import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { IDevice } from '../data/devices.interface';
import { DevicesService } from '../data/devices.service';

@Component({
  selector: 'app-devices-list',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './devices-list.component.html',
  styleUrl: './devices-list.component.css',
})
export class DevicesListComponent {
  devicesService = inject(DevicesService);

  devicesList: IDevice[] = [];

  ngOnInit() {
    this.devicesService.getDevices().subscribe((response) => {
      this.devicesList = response.data.metering_devices.data;
      localStorage.setItem('DevicesData', JSON.stringify(this.devicesList));
    });
  }
}
