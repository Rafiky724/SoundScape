import "../config/db.js";

const tamano = document.getElementById("tamano");
const puerta = document.getElementById("puerta");
const ventana = document.getElementById("ventana");
const final = document.getElementById("final");

const iframeTamano = document.getElementById("tamano").querySelector("iframe");
const iframePuerta = document.getElementById("puerta").querySelector("iframe");
const iframeVentana = document
  .getElementById("ventana")
  .querySelector("iframe");

function getElementFromIframe(iframe, selector) {
  return iframe.contentDocument.querySelector(selector);
}

const formularioArea = getElementFromIframe(iframeTamano, "#formularioArea");
const formularioPuerta = getElementFromIframe(
  iframePuerta,
  "#formularioPuerta"
);
const formularioVentana = getElementFromIframe(
  iframeVentana,
  "#formularioVentana"
);

let largoHabitacion = getElementFromIframe(iframeTamano, "#largoHabitacion");
let altoHabitacion = getElementFromIframe(iframeTamano, "#altoHabitacion");
let anchoHabitacion = getElementFromIframe(iframeTamano, "#anchoHabitacion");
let siVentana = getElementFromIframe(iframeTamano, 'input[name="options"]');
let presupuestoHabitacion = getElementFromIframe(
  iframeTamano,
  "#presupuestoHabitacion"
);

let aux;
let dimensiones;
let opcionPuerta;
let opcionVentana;

formularioArea.addEventListener("submit", tamanoHabitacion);
formularioPuerta.addEventListener("submit", preguntaPuertas);
formularioVentana.addEventListener("submit", preguntaVentanas);

/* Formulario Tamaño Habitacion */

function tamanoHabitacion() {
  largoHabitacion = largoHabitacion.value;
  altoHabitacion = altoHabitacion.value;
  anchoHabitacion = anchoHabitacion.value;

  presupuestoHabitacion = presupuestoHabitacion.value;

  let volumenHabitacion = largoHabitacion * altoHabitacion * anchoHabitacion;

  if (volumenHabitacion >= 75000000) {
    dimensiones = "grande";
  } else if (40000000 < volumenHabitacion) {
    dimensiones = "mediana";
  } else {
    dimensiones = "pequeña";
  }

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

/* Formulario Con Puertas */

function preguntaPuertas() {
  const radioSeleccionado = formularioPuerta.querySelector(
    'input[name="grupoRadios"]:checked'
  );

  opcionPuerta = radioSeleccionado.value;

  console.log(opcionPuerta);

  const elementoVentana = formularioVentana.querySelector(
    `input[value="${opcionPuerta}"]`
  );

  if (elementoVentana) {
    elementoVentana.closest("label").remove();
  }

  // puerta.classList.add("disabled");

  // if (aux == true) {
  //   ventana.classList.remove("disabled");
  // } else {
  //   final.classList.remove("disabled");
  // }
}

/* Formulario Con Ventanas */

function preguntaVentanas() {
  const radioSeleccionado = formularioVentana.querySelector(
    'input[name="grupoRadios"]:checked'
  );

  opcionVentana = radioSeleccionado.value;

  console.log(opcionVentana);

  // ventana.classList.add("disabled");
  // final.classList.remove("disabled");
}
