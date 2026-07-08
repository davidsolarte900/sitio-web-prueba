import { Component, inject } from '@angular/core';
import {FormBuilder,ReactiveFormsModule,Validators} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  cargando: boolean = false;
  error: string = '';

  form = this.fb.group({
    nombre:[
      '',
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ],
    email:[
      '',
      [
        Validators.required,
        Validators.email
      ]
    ],
    password:[
      '',
      [
        Validators.required,
        Validators.minLength(5)
      ]
    ]
  })
  iniciarSesion(){
    if(this.form.invalid) {
      this.form.markAsTouched();
      
      return;
    }
    this.authService
      .login(this.form.value as any)
      .subscribe({
        next: (respuesta) => {
            alert('iniciaste sesion');
            console.log(respuesta);
        },
        error: (error) => {
          this.error = 'error al iniciar sesion'
          console.log(error)
        }
      })
  }
}
