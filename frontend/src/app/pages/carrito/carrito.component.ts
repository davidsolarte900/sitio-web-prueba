import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  // Inyectamos nuestro servicio del carrito
  private carritoService = inject(CarritoService);

  // Leemos de forma reactiva la lista de productos agregados
  productos = this.carritoService.carrito;

  // Calculamos la suma total de los precios
  get totalPagar() {
    return this.productos().reduce((acc, prod) => acc + prod.precio, 0);
  }
}
