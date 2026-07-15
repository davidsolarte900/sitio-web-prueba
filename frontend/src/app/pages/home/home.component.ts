import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BannerComponent } from '../../components/banner/banner.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { BeneficiosComponent } from '../../components/beneficios/beneficios.component';
import { FooterComponent } from '../../components/footer/footer.component';
// 1. Importamos el servicio de productos
import { ProductoService } from '../../services/producto.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    BannerComponent,
    ProductCardComponent,
    BeneficiosComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // 2. Inyectamos el servicio de productos
  private productoService = inject(ProductoService);
  
  // 3. Creamos el arreglo para guardar los productos que irán a la pantalla
  productos: any[] = [];

  ngOnInit(): void {
    this.cargarProductosDestacados();
  }

  // 4. Traemos los productos del backend y seleccionamos los primeros 3 para mostrar
  cargarProductosDestacados() {
    this.productoService.obtenerProductos().subscribe({
      next: (respuesta) => {
        console.log('Productos para la Home:', respuesta);
        // .slice(0, 3) toma los primeros 3 productos existentes en tu base de datos
        this.productos = respuesta.slice(0, 3); 
      },
      error: (error) => {
        console.error('Error al cargar productos en Home:', error);
      }
    });
  }
}
