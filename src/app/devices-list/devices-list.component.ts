import { Component, inject } from '@angular/core';
import { DevicesService } from '../data/devices.service';

@Component({
  selector: 'app-devices-list',
  standalone: true,
  imports: [],
  templateUrl: './devices-list.component.html',
  styleUrl: './devices-list.component.css',
})
export class DevicesListComponent {
  devicesService = inject(DevicesService);

  ngOnInit() {
    this.devicesService.getDevices().subscribe((data) => {
      console.log(data);
    });
  }
}
