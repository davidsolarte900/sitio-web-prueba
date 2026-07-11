import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../interfaces/producto.interface';
import { ProductCardComponent } from '../../components/product-card/product-card.component';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent
  ],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent implements OnInit {
  private productoService = inject(ProductoService);
  productos: Producto[] = [];
  ngOnInit(): void {
    this.productoService.obtenerProductos()
      .subscribe({
        next: (respuesta) => {
          this.productos = respuesta;
        },
        error: (error) => {
          console.error(error);
        }
      });
  }
}