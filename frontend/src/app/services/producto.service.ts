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
};

crearProducto(datos: FormData): Observable<any> {
    const token = sessionStorage.getItem('token');
    return this.http.post(
        `${this.api}/productos`,
        datos,{ headers: { Authorization: `Bearer ${token}`}
        }
    )
};

actualizarProducto(id: string, producto: any): Observable<any> {
    const token = sessionStorage.getItem('token');
    return this.http.put(
        `${this.api}/productos/${id}`,
        producto,{headers:{Authorization: `Bearer ${token}`}})
}

    eliminarProducto(id: string): Observable<any> {
    const token = sessionStorage.getItem('token');
    return this.http.delete(
        `${this.api}/productos/${id}`,
        {headers: {Authorization: `Bearer ${token}`}});
}};



