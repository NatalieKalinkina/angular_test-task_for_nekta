import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { DevicesListComponent } from './devices-list/devices-list.component';
import { canActivateAuth } from './auth/access.guard';

export const routes: Routes = [
  { path: '', component: LoginPageComponent },
  {
    path: 'devices',
    component: DevicesListComponent,
    canActivate: [canActivateAuth],
  },
];
