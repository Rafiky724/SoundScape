import "../config/db.js";
import { ref, getDownloadURL } from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-storage.js';
import { storage } from '../config/db.js'

const tamano = document.getElementById("tamano");
const puerta = document.getElementById("puerta");
const ventana = document.getElementById("ventana");
const final = document.getElementById("final");

const iframeTamano = document.getElementById("tamano").querySelector("iframe");
const iframePuerta = document.getElementById("puerta").querySelector("iframe");
const iframeVentana = document
  .getElementById("ventana")
  .querySelector("iframe");
const iframeFinal = document.getElementById("final").querySelector("iframe");

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
const imagenFinal = getElementFromIframe(iframeFinal, ".imagenFinal")

let storageRef;

let largoHabitacion = getElementFromIframe(iframeTamano, "#largoHabitacion");
let altoHabitacion = getElementFromIframe(iframeTamano, "#altoHabitacion");
let anchoHabitacion = getElementFromIframe(iframeTamano, "#anchoHabitacion");
let siVentana = getElementFromIframe(iframeTamano, 'input[name="options"]');
let presupuestoHabitacion = getElementFromIframe(
  iframeTamano,
  "#presupuestoHabitacion"
);

let aux;
let aux2;
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
    dimensiones = "Habitacion_Grande";
  } else if (40000000 < volumenHabitacion) {
    dimensiones = "Habitacion_Mediana";
  } else {
    dimensiones = "Habitacion_Pequeña";
  }

  let opcion = "";

  if (siVentana && siVentana.checked) {
    opcion = siVentana.value;
  }

  if (opcion == "True") {
    aux = true;
    aux2 = "Con_Ventana";
  } else {
    aux = false;
    aux2 = "Solo_Puerta";
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

  const elementoVentana = formularioVentana.querySelector(
    `input[value="${opcionPuerta}"]`
  );

  if (elementoVentana) {
    elementoVentana.closest("label").remove();
  }

  puerta.classList.add("disabled");

  if (aux == true) {
    ventana.classList.remove("disabled");
  } else {
    final.classList.remove("disabled");
    resultadoFinal();
  }
}

/* Formulario Con Ventanas */

function preguntaVentanas() {

  const radioSeleccionado = formularioVentana.querySelector(
    'input[name="grupoRadios"]:checked'
  );

  opcionVentana = radioSeleccionado.value;

  ventana.classList.add("disabled");
  final.classList.remove("disabled");

  resultadoFinal();

}

async function resultadoFinal() {

  if (aux == true){

    storageRef = ref(storage, `final/${dimensiones}/Con_Ventanas/${opcionPuerta}/${opcionVentana}.jpg`);

  }else{

    storageRef = ref(storage, `final/${dimensiones}/Solo_Puertas/${opcionPuerta}.jpg`);

  }

  try{
    const imagenUrl = await getDownloadURL(storageRef);
    
    imagenFinal.style.backgroundImage = `url("${imagenUrl}")`;
    
    
  }catch(e){

    console.log(e);
    
  }

  




}

