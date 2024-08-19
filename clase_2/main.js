// --------------------------------
// Introducción al DOM
// --------------------------------

// Get Element
// Elegir por nombre de etiqueta
// const body = document.getElementsByTagName("body")[0];

// Elegir por nombre de id
// const texto = document.getElementById("texto");

// Elegir por nombre de clase
// const elementos = document.getElementsByClassName("element");

// Query Selector
// Por id
// const texto2 = document.querySelector("#texto");

// Por nombre de etiqueta
// const body2 = document.querySelector("body");

// Por nombre de clase
// const elementos2 = document.querySelector(".element");
// const elementos2 = document.querySelectorAll(".element"); // Me devuelve un array

// const lista = document.querySelector("ul");

// console.log(body.childNodes);
// console.log(texto);
// console.log(elementos2);

// Acceder al contenido de los elementos
// console.log(texto2.textContent); // Acceder al texto
// console.log(texto2.innerText); // Acceder al texto
// console.log(texto2.innerHTML); // Acceder al html en texto (string)
// console.log(lista.innerHTML); // Acceder al html en texto (string)

// --------------------------------
// Creando y eliminando elementos
// --------------------------------

const title = document.getElementById("title");
const botonCrear = document.querySelector("#crear");
const lista = document.querySelector("ul");

const listaClass = ["element", "new"];

botonCrear.addEventListener("click", () => {
  const element = document.createElement("li"); // Crear elemento

  // console.log(element);
  console.log(lista.children.length);

  element.textContent = title.value;

  for (const className of listaClass) {
    element.classList.add(className);
  }

  lista.appendChild(element); // Agregar elemento al final de la lista1
  title.value = "";
});

const botonBorrar = document.querySelector("#borrar");

botonBorrar.addEventListener("click", () => {
  if (lista.children.length > 0) {
    lista.removeChild(lista.lastChild);
  }
});
