//console.log(`hola david`)
let miVariable = 24;
//console.log(`mi edad es :${miVariable}`);

miVariable = 12;
//console.log(`mi edad es : ${miVariable}`)
let op1 = 2
let op2 = 3
let resultado = op1 + op2;
console.log(`el resultado es ${resultado}`)

// condicionales

//let miNumero = 6
//let resultadoPregunta = miNumero == 7;
//console.log(resultadoPregunta);


//if(miNumero == 6) {
//    console.log(`si. mi numero vale 6`);
//} else {  
//    console.log(`No. mi numero no vale 6`);
//}

//let miNombre = `david`;
//let miNumero = 6;

//if (miNombre == `david`  miNumero >= 6) {
//    console.log(`si.`);
//} else {
//    console.log(`no.`);
//}

let miNumero1 = 5;
if (miNumero1 > 0) {
    console.log(`mi numero es positivo`);
} else if (miNumero1 === 0) {
    console.log(`mi numero es cero`);
} else {
    console.log(`mi numero es negativo`);
}

//bucles ciclos
//let contador = 0
//while(contador < 10) {
//    console.log(contador)
//    contador = contador + 1
//    }

for(let i = 0; i < 10; i++) {
    console.log(i);
}

// funciones

function saludar(nombre, edad) {
    console.log (`hola mi nombre es :${nombre}`);
    console.log (`hola mi edad es :${edad}`);
}
//saludar(`david`, 30);

function multiplicar ( num1, num2) {
    let resultado = num1 * num2 ;
    return resultado;
}

let recibidor = multiplicar(5, 5);{
    console.log(recibidor);
}

//arrays usando bucles

// let miArreglo = [`david`, `fernando`, `karen`, `vanesa`];
// for(let i = 0; i < 4; i++){
//     console.log(`accediendo al indice: ${i}`)
//     let mostrar = miArreglo[i]
//     console.log(mostrar);
// }

// objetos
let persona = {
    nombre : `david`,
    edad : 24,
    masculino : true
};
console.log(persona.masculino);
// persona.comidaFavorita = `hamburguesa` 
// console.log(persona);


let persona2 = {
    nombre : `juan`,
    edad : 25,
    masculino : false
}

let arregloObjetos = [persona,persona2]




