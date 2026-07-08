import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css',
    './css/header.css',
    './css/hero.css',
    './css/catalogo.css',
    './css/footer.css',
    './css/index.css'
  ]
})
export class HomeComponent {
  // Tu código TypeScript aquí
}
