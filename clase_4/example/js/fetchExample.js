// Fetch
// const list = document.querySelector("#todos");

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((data) => {
//     for (const todoDB of data) {
//       const { id, title, completed } = todoDB;

//       createTodo(id, title, completed);
//     }
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Finalizó");
//   });

// function createTodo(id, title, completed) {
//   const todo = document.createElement("div");

//   todo.innerHTML = `
//     <div class="todo ${completed ? "completed" : ""}" id="${id}">
//       <h3>${title}</h3>
//     </div>
//     `;

//   list.appendChild(todo);
// }

// Ejemplo Valorant

const list = document.querySelector("#elements");

fetch("https://valorant-api.com/v1/agents")
  .then((response) => response.json())
  .then(({ data }) => {
    for (const agentDB of data) {
      const { displayName, displayIcon, description } = agentDB;

      const agent = createAgent(displayName, displayIcon, description);

      list.appendChild(agent);
    }
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finalizó");
  });

function createAgent(displayName, displayIcon, description) {
  const agent = document.createElement("div");

  agent.innerHTML = `
    <div class="agent">
      <img src="${displayIcon}" alt="${displayName}" />
      <div class="agent-info">
        <h3>${displayName}</h3>
        <p>${description}</p>
      </div>
    </div>
    `;

  return agent;
}
