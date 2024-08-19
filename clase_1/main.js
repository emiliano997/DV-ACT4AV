// const nombre = prompt("¿Cual es tu nombre?");
// const edad = prompt("¿Cuantos años tienes?");

// alert(`Hola ${nombre}, eres ${edad} años de edad.`);

// Parsear
// const num1 = parseInt(prompt("Ingrese el primer numero"));
// const num2 = Number(prompt("Ingrese el segundo numero"));
// const resultado = num1 + num2;
// console.log("Resultado: " + resultado);

// Condicionales
// == -> Solo evalua el valor
// === -> Evalua el valor y el tipo

// const num1 = parseInt(prompt("Ingrese el primer numero"));
// const num2 = Number(prompt("Ingrese el segundo numero"));
// const resultado = num1 < num2;
// console.log("Resultado: " + resultado);

// if (resultado) console.log("El primer numero es menor");

// Ternarios
// const mensaje =
//   num1 > num2 ? "El prime numero es mayor" : "El segundo numero es mayor";
// alert(mensaje);

// Arrow Function
// const sumar2 = (num1, num2) => num1 + num2;

// const resultado2 = sumar2(num1, num2);
// console.log("Resultado: " + resultado2);

// Funcion tradicional
// function sumar(num1, num2) {
//   return num1 + num2;
// }

// Arrays
// const lista = [1, 2, "dsad", true, [23, 43]];
// lista = [2, 3] ❌

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const lista2 = lista.map((numero) => numero * 2);
// lista.forEach((numero) => {
//   console.log(numero);
// });

// const numeroEspecifico = lista.find((numero) => numero === 2);
// const numerosPares = lista.filter((numero) => numero % 2 === 0);

// console.log(lista2);
// console.log(lista);
// console.log(numerosPares);

for (const number of lista) {
  console.log(number);
}
