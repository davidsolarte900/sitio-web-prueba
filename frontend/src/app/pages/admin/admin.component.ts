import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoService } from '../../services/producto.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

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
  productoEditando: any = null;
  imagenSeleccionada!: File;
  
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
  };
  
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
      }
    )
  };
    
  guardarProducto() {
  if (this.form.invalid) {
    this.form.markAllAsTouched();
    return;
  }
  const formData = new FormData();
  formData.append('nombre', this.form.value.nombre!);
  formData.append('descripcion', this.form.value.descripcion!);
  formData.append('categoria', this.form.value.categoria!);
  formData.append('precio', String(this.form.value.precio));
  formData.append('stock', String(this.form.value.stock));
  formData.append('color', this.form.value.color!);
  formData.append('largo', this.form.value.largo!);

  if (this.imagenSeleccionada) {
    formData.append('imagen', this.imagenSeleccionada);
  }
  this.productoService.crearProducto(formData).subscribe({
    next: () => {
      Swal.fire({
        icon: 'success',
        title: '¡Producto creado!',
        text: 'El producto se guardó correctamente.',
        timer: 1800,
        showConfirmButton: false
      });
      this.cargarProductos();
      this.form.reset({
        precio: 0,
        stock: 0
      });
      this.imagenSeleccionada = undefined as any;
    },
    error: (error) => {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.error.msg || 'No fue posible guardar el producto.'
      });
    }
  });
}

  actualizarProducto() {
    // console.log('ENTRANDO A ACTUALIZAR');
    // console.log('Producto:', this.productoEditando);
    // console.log('ID enviado:', this.productoEditando._id);
    // console.log('Datos formulario:', this.form.value);
  if (this.form.invalid) {this.form.markAllAsTouched();return;}
      this.productoService.actualizarProducto(this.productoEditando._id,this.form.value)
      .subscribe({next: (respuesta) => {
        console.log('RESPUESTA UPDATE:', respuesta);
    //sweetalert2    
    Swal.fire({
            icon: 'success',
            title: '¡Producto actualizado!',
            text: 'Los cambios se guardaron correctamente.',
            timer: 1800,
            showConfirmButton: false});
            this.cargarProductos();
            this.productoEditando = null;
            this.form.reset();
    const botonCerrar = document.querySelector('#modalProducto .btn-close') as HTMLButtonElement;
      botonCerrar?.click()},
      error: (error) => {
      console.error(error)
    }})
};

eliminarProducto(id: string){
  //sweetalert2
  Swal.fire({
  title: '¿Eliminar producto?',
  text: 'Esta acción ocultará el producto del catálogo.',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Sí, eliminar',
  cancelButtonText: 'Cancelar',
  confirmButtonColor: 'rgb(184, 72, 218)',
  cancelButtonColor: '#6c757d'
}).then((result) => {
  if (result.isConfirmed) {
    this.productoService.eliminarProducto(id).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: '¡Eliminado!',
          text: 'El producto fue eliminado correctamente.',
          timer: 1800,
          showConfirmButton: false
        });
        this.cargarProductos();
      },
      error: (error) => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No fue posible eliminar el producto.'
        })
      }
    })
  }
});
  this.productoService
    .eliminarProducto(id)
    .subscribe({
      next: () => {      
        this.cargarProductos();
      },
      error: (error) => {
        console.error(error);
        alert('Error al eliminar producto')}
      })
  };

  editarProducto(producto: any) {
    console.log('Producto seleccionado:', producto);
  this.productoEditando = producto;
  console.log('ID:', this.productoEditando._id);
  this.form.patchValue({
    nombre: producto.nombre,
    descripcion: producto.descripcion,
    categoria: producto.categoria,
    precio: producto.precio,
    stock: producto.stock,
    color: producto.color,
    largo: producto.largo,
    imagen: producto.imagen
  })};

  seleccionarImagen(event: any) {
  if (event.target.files.length > 0) {
    this.imagenSeleccionada = event.target.files[0];
    console.log('Imagen seleccionada:', this.imagenSeleccionada);
  }}
}
