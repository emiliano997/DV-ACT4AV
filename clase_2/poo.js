// --------------------------------
// Objetos
// --------------------------------

// Objetos literales
// const persona = {
//   nombre: "Juan",
//   edad: 30,
//   peliculas: ["El Señor de los Anillos", "Star Wars"],
// };

// console.log(persona);

// persona.email = "juan@gmail.com";
// persona.nombre = "Juan Perez";

// console.log(persona.nombre);
// console.log(persona["peliculas"]);

// Array de objetos literales
// const personas = [
//   {
//     nombre: "Juan",
//     edad: 30,
//     peliculas: ["El Señor de los Anillos", "Star Wars"],
//   },
//   {
//     nombre: "Pedro",
//     edad: 28,
//     peliculas: ["El Señor de los Anillos", "Star Wars"],
//   },
// ];

// console.log(personas);

// --------------------------------
// Funciones constructoras
// --------------------------------

// Ya no se utiliza
// function Persona(nombre, edad, peliculas) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.peliculas = peliculas;

//   this.saludo = function () {
//     console.log(`Hola ${this.nombre}, eres ${this.edad} años de edad.`);
//   };
// }

// Persona.prototype.despedida = function () {
//   console.log(`Hasta luego ${this.nombre}`);
// };

// const juan = new Persona("Juan", 30, ["El Señor de los Anillos", "Star Wars"]);

// console.log(juan);

// juan.saludo();
// juan.despedida();

// --------------------------------
// Clases
// --------------------------------

class Persona {
  #nombre;
  #edad;
  #peliculas;

  constructor(nombre, edad, peliculas) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#peliculas = peliculas;
  }

  saludar() {
    console.log(`Hola ${this.#nombre}, eres ${this.#edad} años de edad.`);
  }
}

class Empleado extends Persona {
  #cargo;

  constructor(nombre, edad, peliculas, cargo) {
    super(nombre, edad, peliculas);
    this.#cargo = cargo;
  }
}

const juan = new Empleado(
  "Juan",
  30,
  ["El Señor de los Anillos", "Star Wars"],
  "Ingeniero"
);

console.log(juan);
// console.log(juan.#nombre)
juan.saludar();
