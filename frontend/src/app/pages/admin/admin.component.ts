import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../../services/producto.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
  CommonModule,
  ReactiveFormsModule 
],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit {
  private productoService = inject(ProductoService);
  private fb = inject(FormBuilder);
  productos: any[] = [];
  form = this.fb.group({
  nombre: ['', Validators.required],
  descripcion: ['', Validators.required],
  categoria: ['', Validators.required],
  precio: [0, Validators.required],
  stock: [0, Validators.required],
  color: ['', Validators.required],
  largo: ['', Validators.required],
  imagen: ['', Validators.required],
});
  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos() {
    this.productoService.obtenerProductos()
      .subscribe({
        next: (respuesta) => {
          console.log('Productos recibidos:', respuesta);
          this.productos = respuesta;
        },
        error: (error) => {
          console.log(error);
        }
      });
    };
    
    guardarProducto() {
  if (this.form.invalid) {
    this.form.markAllAsTouched();
    return;
  }
  this.productoService
    .crearProducto(this.form.value)
    .subscribe({
      next: () => {
        alert('Producto creado correctamente');
        this.cargarProductos();
        this.form.reset({
          precio: 0,
          stock: 0
        });
      },
      error: (error) => {

  console.log('Error completo:', error);

  console.log('Backend:', error.error);

  alert(JSON.stringify(error.error));

}
    });
}
}
