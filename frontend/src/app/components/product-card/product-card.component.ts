import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  productos = [{
    nombre:"Extensión 22 pulgadas",
    precio:350000,
    imagen:"assets/productos/rubio.jpg"
  },
  {
    nombre:"Extensión 20 pulgadas",
    precio:320000,
    imagen:"assets/productos/castano.jpg"
  },

  {
    nombre:"Extensión 21 pulgadas ",
    precio:340000,
    imagen:"assets/productos/negro.jpg"
  }];
}
