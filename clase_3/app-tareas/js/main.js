const boton = document.querySelector("#enviar");
const tareas = document.querySelector("#tareas");
const eliminar = document.querySelector("#eliminar");

// DB
const tareasDB = JSON.parse(localStorage.getItem("tareas")) || [];

boton.addEventListener("click", (event) => {
  // Impide el comportamiento por defecto
  event.preventDefault();

  const title = document.querySelector("#title").value;
  const description = document.querySelector("#description").value;

  tareasDB.push({ title, description });

  // JSON.stringify() -> Convertir un objeto a una cadena de texto
  localStorage.setItem("tareas", JSON.stringify(tareasDB));

  const tarea = createTask(title, description, tareasDB.length + 1);

  tareas.appendChild(tarea);

  document.querySelector("#title").value = "";
  document.querySelector("#description").value = "";
});

eliminar.addEventListener("click", (event) => {
  tareasDB.pop();
  localStorage.setItem("tareas", JSON.stringify(tareasDB));
  showTasks();
});

function createTask(title, description, id) {
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

  return tarea;
}

function showTasks() {
  tareas.innerHTML = "";

  if (tareasDB.length > 0) {
    tareasDB.forEach((tareaDB, index) => {
      const tarea = createTask(tareaDB.title, tareaDB.description, index + 1);
      tareas.appendChild(tarea);
    });
  }
}

showTasks();
