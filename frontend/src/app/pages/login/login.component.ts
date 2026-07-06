import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  usuario = {
    email: '',
    password: ''
  };

  onLogin(){
    this.authService.login(this.usuario).subscribe({
      next: (response) => {
        console.log('Inicio de sesión exitoso', response);
        
        this.router.navigate(['/tasks']); 
      },
      error: (error) => {
        console.error('Error en el login', error);
      }
    });
  }



}
