const contenedor = document.getElementById(`contenedor`);

const obetenerPersonajes =  async() => {
    try {
        const respuesta = await fetch(`https://rickandmortyapi.com/api/character`);
        console.log(respuesta)
    } catch(error) {
        console.log(` este es un error atrapado por el catch : ${error}`);
    }
};

obetenerPersonajes();

