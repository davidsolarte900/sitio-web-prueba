const contenedor = document.getElementById(`contenedor`);

const obtenerPersonajes = async() => {
    try {
        // funcion fetch trae una promesa y la eseramos con await
        const respuesta = await fetch(`https://rickandmortyapi.com/api/character`);
        const data = await respuesta.json();
        console.log(data.results);
        data.results.forEach((personaje) => {
            //console.log(personaje.name);
            contenedor.innerHTML += `
            <div class="col-md-4 col-lg-3">
                <h2>${personaje.name}</h2>
            </div>
            `;
        });
    } catch(error) {
        console.log(`este es un error atrapado por el catch: ${ error }`);
    }
};

obtenerPersonajes ();