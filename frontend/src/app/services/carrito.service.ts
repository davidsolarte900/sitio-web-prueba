import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  // Usamos un Signal de Angular para que el contador reaccione instantáneamente
  private _carrito = signal<any[]>([]);

  // Exponemos el carrito para leerlo desde los componentes
  get carrito() {
    return this._carrito.asReadonly();
  }

  // Función para añadir productos al carrito
  agregarProducto(producto: any) {
    this._carrito.update(items => [...items, producto]);
    console.log('Carrito actualizado:', this._carrito());
  }

  // Función para obtener el total de artículos
  obtenerContador() {
    return this._carrito().length;
  }
}
