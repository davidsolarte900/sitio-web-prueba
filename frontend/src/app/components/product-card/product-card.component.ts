import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() producto!: Producto;

}