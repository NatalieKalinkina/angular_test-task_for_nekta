import { Routes } from '@angular/router';
import { AuthorizationComponent } from './authorization/authorization.component';
import { DevicesListComponent } from './devices-list/devices-list.component';

export const routes: Routes = [
  { path: 'auth', component: AuthorizationComponent },
  { path: 'devices', component: DevicesListComponent },
];
