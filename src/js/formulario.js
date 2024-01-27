import "../config/db.js";

const tamano = document.getElementById("tamano");
const puerta = document.getElementById("puerta");

const iframeTamano = document.getElementById("tamano").querySelector("iframe");

function getElementFromIframe(iframe, selector) {
  return iframe.contentDocument.querySelector(selector);
}

const formularioArea = getElementFromIframe(iframeTamano, "#formularioArea");

let largoHabitacion = getElementFromIframe(iframeTamano, "#largoHabitacion");
let altoHabitacion = getElementFromIframe(iframeTamano, "#altoHabitacion");
let anchoHabitacion = getElementFromIframe(iframeTamano, "#anchoHabitacion");
let siVentana = getElementFromIframe(iframeTamano, 'input[name="options"]');
let aux;
let dimensiones;

formularioArea.addEventListener("submit", tamanoHabitacion);

function tamanoHabitacion() {
  largoHabitacion = largoHabitacion.value;
  altoHabitacion = altoHabitacion.value;
  anchoHabitacion = anchoHabitacion.value;

  let volumenHabitacion = largoHabitacion * altoHabitacion * anchoHabitacion;

  if (volumenHabitacion >= 75000000) {
    dimensiones = "grande";
  } else if (40000000 < volumenHabitacion) {
    dimensiones = "mediana";
  } else {
    dimensiones = "pequeña";
  }

  console.log(dimensiones);

  let opcion = "";

  if (siVentana && siVentana.checked) {
    opcion = siVentana.value;
  }

  if (opcion == "True") {
    aux = true;
  } else {
    aux = false;
  }

  tamano.classList.add("disabled");
  puerta.classList.remove("disabled");
}
