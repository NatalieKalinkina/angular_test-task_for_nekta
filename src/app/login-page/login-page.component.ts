import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
})
export class LoginPageComponent {
  authService = inject(AuthService);
  router = inject(Router);

  isPasswordHidden = signal(true);

  form: FormGroup;

  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    this.isPasswordHidden.set(true);
    this.authService
      .login(this.form.value)
      .pipe(
        catchError((error) => {
          if (error.status === 400) {
            this.errorMessage = `Неверный логин или пароль`;
          } else {
            this.errorMessage = 'На сервере произошла ошибка';
          }
          return throwError(
            () => new Error('Что-то пошло не так. Попробуйте позже')
          );
        })
      )
      .subscribe(() => {
        this.router.navigate(['/devices'], { replaceUrl: true });
      });
  }
}
