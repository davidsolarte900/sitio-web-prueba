//const contenedor = document.getElementById(`contenedor`);

const obtenerTitle = async() => {
    try {
        const respuesta = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
        const data = await respuesta.json();
        data.forEach(Element => {
            contenedor.innerHTML +=`
            <div class="col-md-4 col-lg-3 text center">
                <h2>${Element.title}</h2>
            </div>
            `;
            //console.log(Element.id);
        })
        
    } catch(error) {
        console.log(error)
    }
} 
obtenerTitle();

