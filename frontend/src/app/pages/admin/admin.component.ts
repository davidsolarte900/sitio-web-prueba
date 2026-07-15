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
  imagenSeleccionada: File | null = null;

  // 1. Quitamos 'color' e 'imagen' para que el formulario no se quede bloqueado como inválido
  form = this.fb.group({
    nombre: ['', Validators.required],
    descripcion: ['', Validators.required],
    categoria: ['', Validators.required],
    precio: [0, [Validators.required, Validators.min(1)]],
    stock: [0, [Validators.required, Validators.min(0)]],
    largo: ['', Validators.required]
  });

  ngOnInit(): void {
    this.cargarProductos();
  }

  // Captura la imagen correctamente
  onFileSelected(event: any) {
    if (event.target.files && event.target.files.length > 0) {
      this.imagenSeleccionada = event.target.files[0];
      console.log('Imagen lista para enviar:', this.imagenSeleccionada?.name)
    }
  }

  cargarProductos() {
    this.productoService.obtenerProductos().subscribe({
      next: (respuesta) => {
        console.log('Productos recibidos:', respuesta);
        this.productos = respuesta;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
    
  guardarProducto() {
    // Si falta texto o no hay una nueva imagen seleccionada, frenamos con aviso
    if (this.form.invalid || !this.imagenSeleccionada) {
      this.form.markAllAsTouched();
      Swal.fire({
        icon: 'warning',
        title: 'Formulario incompleto',
        text: 'Por favor, llena todos los campos obligatorios y selecciona una imagen.'
      });
      return;
    }

    const formData = new FormData();
    formData.append('nombre', this.form.value.nombre!);
    formData.append('descripcion', this.form.value.descripcion!);
    formData.append('categoria', this.form.value.categoria!);
    formData.append('precio', String(this.form.value.precio));
    formData.append('stock', String(this.form.value.stock));
    formData.append('largo', this.form.value.largo!);
    formData.append('imagen', this.imagenSeleccionada);

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
        this.resetearFormulario();
      },
      error: (error) => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.error?.msg || 'No fue posible guardar el producto.'
        });
      }
    });
  }

  editarProducto(producto: any) {
    console.log('Producto seleccionado para editar:', producto);
    this.productoEditando = producto;
    
    // Rellenamos el formulario con los datos existentes excluyendo los que quitamos del group
    this.form.patchValue({
      nombre: producto.nombre,
      descripcion: producto.descripcion,
      categoria: producto.categoria,
      precio: producto.precio,
      stock: producto.stock,
      largo: producto.largo
    });
  }

  actualizarProducto() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    // Usamos FormData si quieres actualizar también la imagen de forma opcional
    const formData = new FormData();
    formData.append('nombre', this.form.value.nombre!);
    formData.append('descripcion', this.form.value.descripcion!);
    formData.append('categoria', this.form.value.categoria!);
    formData.append('precio', String(this.form.value.precio));
    formData.append('stock', String(this.form.value.stock));
    formData.append('largo', this.form.value.largo!);
    
    if (this.imagenSeleccionada) {
      formData.append('imagen', this.imagenSeleccionada);
    }

    this.productoService.actualizarProducto(this.productoEditando._id, formData).subscribe({
      next: (respuesta) => {
        console.log('RESPUESTA UPDATE:', respuesta);
        Swal.fire({
          icon: 'success',
          title: '¡Producto actualizado!',
          text: 'Los cambios se guardaron correctamente.',
          timer: 1800,
          showConfirmButton: false
        });
        this.cargarProductos();
        this.resetearFormulario();
        
        // Cierra el modal de Bootstrap automáticamente
        const botonCerrar = document.querySelector('#modalProducto .btn-close') as HTMLButtonElement;
        botonCerrar?.click();
      },
      error: (error) => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudieron actualizar los datos del producto.'
        });
      }
    });
  }

  eliminarProducto(id: string) {
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
        // Corregida duplicidad: ahora solo realiza una única llamada HTTP limpia
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
            });
          }
        });
      }
    });
  }

  // Función interna para limpiar estados después de crear o editar
  private resetearFormulario() {
    this.form.reset({
      nombre: '',
      descripcion: '',
      categoria: '',
      precio: 0,
      stock: 0,
      largo: ''
    });
    this.productoEditando = null;
    this.imagenSeleccionada = null;
  }
}
