import { Component, inject } from '@angular/core';
import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  authService = inject(AuthService);
  router = inject(Router);

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: new FormControl(null),
      password: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    this.authService.login(this.form.value).subscribe((data) => {
      this.router.navigate(['/devices']);
      console.log(data);
    });
  }
}
