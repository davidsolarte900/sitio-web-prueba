/*condiciones anidadas: son estructuras if, else if o  else dentro de otro bloque condicional.*/

let edad = 25;
let experiencia = true;
if (edad >=18){
    if (experiencia) {
    console.log(`puede aplicar a puestos senior.`);
}   else {
    console.log(`puedes aplicar a puestos junior.`);
}
}   else {
    console.log (`aun no puedes aplicar.`);
}

/* operadores logicos: compara 2 expresiones eje: && , || */

let tieneedad = true;
let tienelicencia = true;

console.log(`tieneedad && tienelicencia`)

let esfindesemana = true;
let esferiado = true;

console.log(`esfindesemana || esferiado`)

/* arrays: permite almacenar multiples valores en una sola variable ordenada. eje */

let frutas = [`manzana`,`platano`,`uva`];
let numeros = [1,2,3,4,5];

console.log(frutas[0]); // indice 0 o sea al manzana corresponde el numero 0  y asi sucesivamente

/*modificar un elemento*/

frutas[1] = `fresa` // cambio platanio por fresa

/*obtener longitud*/
console.log(frutas.length) // muestra valor numerico de nuestra muestra

//eje:
let precios = [10.5, 25.0, 5.99, 40.0];
console.log(`listado de precios:`);
precios.forEach((precios, indice) => {
console.log(`producto ${indice + 1}: ${precios}`)
});

/*obejtos javascript: agrupan valores relacionados y funcionalidades en unsolo lugar*/
//ejemplos:

//defi objeto
const carro = {
    marca: `toyota`,
    modelo: `corolla`,
    velocidad: 0,

//funcio 1 acelerar
acelerar: function(cantidad) {
    this.velocidad +- cantidad;
    console.log(`el ${this.modelo} acelero a ${this.velocidad} km/h.`)
},
//funciuon 2 frenar
frenar: function(cantidad) {
    this.velocidad -= cantidad;
    if (this.velocidad < 0) this.velocidad = 0;
    console.log(`el ${this.modelo} freno a ${this.velocidad} km/h.`);
},
//funcion 3 mostare estado:
mostrarestado: function() {
    console.log(`coche: ${this.marca} ${this.modelo}, velocidad: ${this.velocidad}`)
}
};
//uso obj y sus funciones:
carro.mostrarestado();
carro.acelerar(50);
carro.frenar(20);

/*ciclos o bucles: estructutras que repiten un bloque de codigo varias veces miestras se cumpla una condicion, optimizando tareas repetitivas y facilitando la interaccion sore datos */
//ejempl:
let frutas = [`manzana`, `banano`, `uva`, `naranja`];
// i< frutas.length asegura que recorra todos los elementos
for (let i = 0; i < frutas.length; i++) {
    console.log(`indice ${i}: ${frutas[i]}`);
}




