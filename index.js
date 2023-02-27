// let firstBatch = 5
// let secondBatch = 7

// creo una variable con let/const/var
// cuando creo una variable la inicializo

// let count = firstBatch + secondBatch;

// el valor de la variable va a ser igual a la operacion de suma de dos variables

// tambien puedo restar, multiplicar y dividir variables
// console.log(count);

// sirve para ver en consola el valor de la variable o lo que quiera consultar.

// let myAge = 28;

// let humanDogRatio = 5;

// let myDogAge = myAge * humanDogRatio;

// console.log (myDogAge);

// document.getElementById("count-el").innerText = 10;

// let count = 5;

// count = count + 1;

// console.log (count);

// function increment() {
//   console.log("the button was clicked");
// }

// la funcion se genera con function el nombre de la funcion y ()

// function countdown() {
//   console.log(5);
//   console.log(4);
//   console.log(3);
//   console.log(2);
//   console.log(1);
// }

// countdown ();

// asi llamo a la funcion

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// variables globales

// function logLapTime() {
//     let totalTime = lap1 + lap2 + lap3
// variable local
//     console.log(totalTime)
// }

// logLapTime()

// let lapsCompleted = 0

// function incrementLap() {
//     lapsCompleted = lapsCompleted + 1
// }

// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lapsCompleted)

// let count = 0;

// function increment () {
//     let count = count + 1;
//     console.log (count);
// }

// increment ();

let countEl = document.getElementById("count-el"); // pass in arguments
// es un javascript representation del item del html
// el getElementById tambien es un metodo y el console.log tambien

// camelCase

let count = 0;

function increment() {
  // console.log ("clicked")
  count += 1;
  console.log(count);
  countEl.textContent = parseInt(count);
  // llamo la variable, aplico un metodo y el resultado es igual a count
}

// DOM = Document object model = how you use Javascript to modify a website

// Document = HTML
// Object = document type html = javascript object
// Model = Javascript representation of html thing

// en el contexto de javascript hablamos de strings y numbers

// para usar un string lo ponemos entre comillas

let saveEl = document.getElementById("save-el");

function save() {
  let entries = count + " - ";
  // saveEl.innerText += " " + entries;
  // estoy agregando al texto ya existente con el +=
  saveEl.textContent += entries;

  // el metodo innerText no me permite visualizar los caracteres que no son visibles para los humanos
  // por eso es preferible utilizar textContent que me permite incluir tambien los espacios.

  console.log(count);
  alert("El total de personas que ingreso al tren es " + count);
  // uso el alert para mostrar un mensaje al usuario.
  countEl.textContent = 0;
  count = 0;
}

// funcion para mostrar el count por consola
