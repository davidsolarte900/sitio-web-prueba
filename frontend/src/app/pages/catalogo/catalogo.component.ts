import { Component } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent {

  productos: Producto[] = [

    {
      id:1,
      nombre:'Extensiones Lisas',
      color:'#1 Negro',
      largo:'22 pulgadas',
      precio:280000,
      imagen:'assets/productos/negro.jpg',
      disponible:true
    },

    {
      id:2,
      nombre:'Extensiones Rubio',
      color:'#613',
      largo:'24 pulgadas',
      precio:320000,
      imagen:'assets/productos/rubio.jpg',
      disponible:true
    },

    {
      id:3,
      nombre:'Extensiones Castaño',
      color:'#4',
      largo:'20 pulgadas',
      precio:295000,
      imagen:'assets/productos/castano.jpg',
      disponible:true
    }

  ];

}
