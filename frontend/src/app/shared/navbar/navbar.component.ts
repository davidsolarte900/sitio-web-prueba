import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  // 1. Inyectamos los servicios de forma limpia en la clase
  private authService = inject(AuthService);
  private carritoService = inject(CarritoService);

  // 2. Definimos las propiedades del componente
  usuario = this.authService.obtenerUsuario();
  estaLogueado = this.authService.estaLogueado();

  // 3. Método para obtener la cantidad total desde el HTML
  get totalItems() {
    return this.carritoService.obtenerContador();
  }

  // 4. Método para cerrar sesión cerramos su llave de forma correcta
  cerrarSesion() {
    this.authService.cerrarSesion();
    location.reload();
  }
}



