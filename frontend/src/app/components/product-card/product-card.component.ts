import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../interfaces/producto.interface';
// 1. Importamos el servicio del carrito
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() producto!: Producto;

  // 2. Inyectamos el servicio de forma global
  private carritoService = inject(CarritoService);

  agregarAlCarrito(producto: any) {
    // 3. Enviamos el producto al servicio en lugar de solo imprimir en consola
    this.carritoService.agregarProducto(producto);
  }
}

