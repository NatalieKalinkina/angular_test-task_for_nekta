import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { DevicesListComponent } from './devices-list/devices-list.component';

export const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'devices', component: DevicesListComponent },
];
