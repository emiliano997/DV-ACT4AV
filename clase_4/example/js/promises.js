// Promesas
// const nuevaPromesa = new Promise((resolve, reject) => {
//   // resolve: Se ejecuta cuando la promesa se cumple o resuelve
//   // reject: Cuando hay un error o la promesa se rechaza

//   setTimeout(() => {
//     // resolve("La promesa se resolvió");
//     reject("La promesa se rechazó");
//   }, 2000);
// });

// console.log(nuevaPromesa);

// then: "Entonces". Cuando la promesa se resuelve
// catch: "Atrapar". Cuando la promesa se rechaza
// finally: "Finalmente". Cuando la promesa se termina de ejecutar
// nuevaPromesa
//   .then((resultado) => {
//     console.log(resultado);
//   })
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Finalmente"));

// Ejercicio promesas
function login(username, password) {
  return new Promise((resolve, reject) => {
    // Simulando consulta al backend
    setTimeout(() => {
      if (username === "emipe" && password === "1234") {
        resolve("Bienvenido emipe");
      }

      reject("Usuario o contraseña incorrectos");
    });
  }, 2000);
}

const loginButton = document.querySelector("button");
const error = document.querySelector("#errors");
const response = document.querySelector("#response");

loginButton.addEventListener("click", (event) => {
  event.preventDefault();
  loginButton.disabled = true;

  const username = document.querySelector("#username");
  const password = document.querySelector("#password");

  if (!username.value || !password.value) {
    error.innerHTML = "Por favor, rellena todos los campos";
    return;
  }

  login(username.value, password.value)
    .then((result) => {
      response.innerHTML = result;
      error.innerHTML = "";
    })
    .catch((e) => {
      error.innerHTML = e;
    })
    .finally(() => {
      console.log("Finalmente");

      loginButton.disabled = false;
    });
});
