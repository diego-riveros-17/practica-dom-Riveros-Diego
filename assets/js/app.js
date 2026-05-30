// (() => {
//   console.log("Función flecha auto-invocada");
// })();
const personajes = [
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

const cargarSuperheroes = () => {
  personajes.forEach((personaje) => {
    // console.log(personaje);
    contenedor.innerHTML += `<div class="col-4 my-2 d-flex justify-content-center" data-id="${personaje.id}">
            <div class="card" style="width: 25rem">
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

cargarSuperheroes();

contenedor.addEventListener("click", (e) => {
  if (e.target.classList.contains("btnEliminar")) {
    const cardSuperheroe = e.target.closest(".col-4");
    const idPersonaje = Number(cardSuperheroe.dataset.id);
    //console.log(idPersonaje);

    cardSuperheroe.remove();
  }
});

// btnEliminar.addEventListener("click", () => {
//   const idPersonaje = btnEliminar.closest(".col-4").value;
// });
