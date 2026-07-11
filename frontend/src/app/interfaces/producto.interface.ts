export interface Producto{
    _id?:string;
    nombre:string;
    descripcion:string;
    precio:number;
    color:string;
    largo:string;
    categoria:string;
    stock:number;
    imagen:string;
    destacado:boolean;
    activo?:boolean;
}