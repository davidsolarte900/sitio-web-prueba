import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { BannerComponent } from '../../components/banner/banner.component';
import { ProductCardComponent } from '../../components/product-card/product-card.component';
import { BeneficiosComponent } from '../../components/beneficios/beneficios.component';
import { FooterComponent } from '../../components/footer/footer.component';



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
  styleUrls: [
    './home.component.css',    
  ]
})
export class HomeComponent {

}
