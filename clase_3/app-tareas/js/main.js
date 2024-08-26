const boton = document.querySelector("#enviar");
const tareas = document.querySelector("#tareas");

boton.addEventListener("click", (event) => {
  // Impide el comportamiento por defecto
  event.preventDefault();

  const title = document.querySelector("#title").value;
  const description = document.querySelector("#description").value;

  const tarea = document.createElement("div");

  tarea.classList.add("col", "s12", "m6");

  tarea.innerHTML = `
  <div class="card blue-grey darken-1">
    <div class="card-content white-text">
      <span class="card-title">${title}</span>
      <p>${description}</p>
    </div> 
  </div>
  `;

  tareas.appendChild(tarea);

  document.querySelector("#title").value = "";
  document.querySelector("#description").value = "";
});
