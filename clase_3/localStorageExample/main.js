const boton = document.querySelector("#guardar");
const parrafo = document.querySelector("#dato-guardado");
const eliminar = document.querySelector("#eliminar");

boton.addEventListener("click", (event) => {
  const dato = document.querySelector("#dato").value;

  console.log(dato);

  localStorage.setItem("dato", dato);

  mostrarDato();
});

eliminar.addEventListener("click", (event) => {
  localStorage.removeItem("dato");
  mostrarDato();
});

function mostrarDato() {
  if (localStorage.getItem("dato")) {
    parrafo.textContent = localStorage.getItem("dato");
  } else {
    parrafo.textContent = "No hay dato guardado";
  }
}

mostrarDato();
