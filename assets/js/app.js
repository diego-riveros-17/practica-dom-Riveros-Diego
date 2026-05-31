let personajes = [
  {
    id: 1,
    nombre: "A-Bomb",
    imagen:
      "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg",
  },
  {
    id: 2,
    nombre: "Abe Sapien",
    imagen:
      "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/2-abe-sapien.jpg",
  },
  {
    id: 3,
    nombre: "Abin Sur",
    imagen:
      "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/3-abin-sur.jpg",
  },
  {
    id: 4,
    nombre: "Abomination",
    imagen:
      "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/4-abomination.jpg",
  },
  {
    id: 5,
    nombre: "Abraxas",
    imagen:
      "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/5-abraxas.jpg",
  },
];

// console.log(personajes);

const contenedor = document.querySelector("#cardSuperheroe");

// console.log(contenedor);

// const cargarSuperheroes = contenedor.addEventListener("click", () => {
//   //   console.log("click");

// });

const cargarSuperheroes = (listaPersonajes) => {
  contenedor.innerHTML = "";

  listaPersonajes.forEach((personaje) => {
    // console.log(personaje);
    contenedor.innerHTML += `<div class="col-4 my-3 d-flex justify-content-center" data-id="${personaje.id}">
            <div class="card bg-black text-warning" style="width: 25rem">
              <img src="${personaje.imagen}" class="card-img-top" alt="..." style="height: 25rem;"/>
              <div class="card-body">
                <h5 class="card-title">${personaje.nombre}</h5>
              </div>

              <div class="card-body">
                <button class="btn btn-danger btnEliminar">Eliminar</button>
              </div>
            </div>
          </div>`;
  });
};

cargarSuperheroes(personajes);

contenedor.addEventListener("click", (e) => {
  if (e.target.classList.contains("btnEliminar")) {
    const cardSuperheroe = e.target.closest(".col-4");
    const idPersonaje = Number(cardSuperheroe.dataset.id);

    personajes = personajes.filter((personaje) => {
      return personaje.id !== idPersonaje;
    });

    cardSuperheroe.remove();
    cargarSuperheroes(personajes);
  }
});

//Creamos una constante que selecciona todo el formulario
const formCargarSuperheroe = document.querySelector("#cargarSuperheroe");

//Escucha el formulario se ejecuta en envio de datos
//preventDefault evita que la pagina se regargue por completo
// obtenemos los valores enviados en formulario
//Lo cargamos en una constante con el formato de objeto para insertarlo en el arreglo
formCargarSuperheroe.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombreSuperheroe = e.target.elements.nombreSuperheroe.value;
  const urlSuperheroe = e.target.elements.imageSuperheroe.value;

  const nuevoPersonaje = {
    id: personajes.length + 1,
    nombre: nombreSuperheroe,
    imagen: urlSuperheroe,
  };

  personajes.push(nuevoPersonaje);
  cargarSuperheroes(personajes);
  formCargarSuperheroe.reset();
});

//Creamos una constante que selecciona el input
const inputBuscarSuperheroe = document.querySelector("#nameSuperheroe");

//Escucha el formulario hasta que se ejecuta en envio de datos con el input
// obtenemos los valores enviados en el input
inputBuscarSuperheroe.addEventListener("input", (e) => {
  const nombreSuperheroe = e.target.value.toUpperCase();

  const personajeFiltrado = personajes.filter((personaje) => {
    return personaje.nombre.toUpperCase().includes(nombreSuperheroe);
  });

  if (personajeFiltrado != "") {
    cargarSuperheroes(personajeFiltrado);
  } else {
    contenedor.innerHTML = `<div class="row justify-content-center">
                              <div class="col-4">
                                  <div class="alert alert-danger" role="alert">
                                    No se encontraron personajes
                                  </div>
                               </div>
                             </div>`;
  }
});
