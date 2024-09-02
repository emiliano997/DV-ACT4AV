// setTimeout
// const saludar = () => {
//   console.log("Hola mundo");
// };

// setTimeout(saludar, 5000);

// setTimeout(() => {
//   console.log("Hola mundo");
// }, 2000);

// const result = document.querySelector("#result");

// const timeout = setTimeout(() => {
//   const boton = document.querySelector("button");
//   boton.disabled = false;

//   result.innerHTML = "Hola mundo";
// }, 5000);

// clearTimeout(timeout);
// result.innerHTML = "Se cortó la ejecución del timeout";

// setInterval
// const boton = document.querySelector("button");
// const result = document.querySelector("#result");
// let contador = 5;

// const intervalo = setInterval(() => {
//   result.innerHTML = `Contador: ${contador}`;

//   if (contador === 0) {
//     boton.disabled = false;
//     clearInterval(intervalo);
//   }

//   contador--;
// }, 1000);

// Ejemplo combinado

// const result = document.querySelector("#result");
// let contador = 5;

// const intervalo = setInterval(() => {
//   result.innerHTML = `Contador: ${contador}`;
//   contador--;
// }, 1000);

// setTimeout(() => {
//   clearInterval(intervalo);
// }, 5000);
