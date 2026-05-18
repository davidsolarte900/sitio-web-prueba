// const contenedor = document.getElementById(`contenedor`);

// const obetenerPersonajes =  async() => {
//     try {
//         const respuesta = await fetch(`https://rickandmortyapi.com/api/character`);
//         console.log(respuesta)
//     } catch(error) {
//         console.log(` este es un error atrapado por el catch : ${error}`);
//     }
// };

// obetenerPersonajes();


const contenedor = document.getElementById(`contenendor`);

const products = async() => {
    try {
        const respuesta = await fetch(`https://fakestoreapi.com/products`);
       console.log();
    } catch(error) {
        console.log(`error encontrado por catch ${error}`);
    }
}
obtenerProductos();








// const contenedor = document.getElementById(`contenedor`);

// const obtenerjson = async() => {
//     try {
//         const respuesta = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//         const data = await respuesta.json();
//         console.log(data);
        
//     } catch(error) {
//         console.log(`error encontrado por catch: ${error}`);
//     }
// };

// obtenerjson();

// console.log(respuesta)