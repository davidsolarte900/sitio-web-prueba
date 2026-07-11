import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto.interface';
import { environment } from '../../environment/environment';

@Injectable({
providedIn:'root'
})
export class ProductoService{
private http=inject(HttpClient);
private api=environment.apiUrl;
obtenerProductos():Observable<Producto[]>{
return this.http.get<Producto[]>(`${this.api}/productos`);
}};