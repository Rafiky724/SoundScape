import "../config/db.js";
import { auth, db } from "../config/db.js";
import {
  addDoc,
  getDocs,
  collection,
  query,
  where,
  updateDoc,
  arrayUnion,
  doc,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

onAuthStateChanged(auth, async (user) => {
  loginCheck(user);
});

//Muestra los elementos de acuerdo a si la sesión está activa o no
const loginCheck = (user) => {
  const botonNoSesion = document.getElementById("agregarComentarioNo");
  const boton = document.getElementById("agregarComentario");

  if (user) {
    botonNoSesion.classList.add("disabled");
    boton.classList.remove("disabled");
  }
};

const formularioMensaje = document.querySelector("#formularioMensaje");
const formularioRespuesta = document.querySelector("#formularioRespuesta");

formularioMensaje.addEventListener("submit", async (e) => {
  e.preventDefault();

  const loadingIndicator = document.getElementById("loader-pagina-actualizar");
  const textoIndicator = document.getElementById("info-act");
  textoIndicator.innerHTML = "Agregando pregunta";

  loadingIndicator.classList.remove("disabled");

  const mensaje = document.getElementById("mensajeTexto").value;
  const Fecha = new Date();

  const user = auth.currentUser;

  if (user) {
    //Se guarda su UID única
    const userUID = user.uid;
    //Se guarda la colección de 'usuarios'
    const usersCollectionRef = collection(db, "usuarios");
    //Se busca dentro de la colección algún usuario que tenga la misma UID
    const query2 = query(usersCollectionRef, where("uid", "==", userUID));
    const querySnapshot = await getDocs(query2);

    //Una condicional para que se verifique que se hayan encontrado algún usuario
    if (!querySnapshot.empty) {
      //Se guarda todos los datos del usuario con esa UID
      const userDocument = querySnapshot.docs[0];
      const userData = userDocument.data();

      // Accede a las etiquetas <p> por su ID y actualiza su contenido con los datos del usuario
      //document.getElementById('nombre').textContent = userData.nombre + ' ' + userData.apellidos;

      const docRef = await addDoc(collection(db, "comunidad"), {
        correoAutor: userData.correo,
        fecha: Fecha,
        foto: userData.foto,
        pregunta: mensaje,
        respuestas: [],
      });

      const nuevaPreguntaId = docRef.id;

      await updateDoc(doc(db, "comunidad", nuevaPreguntaId), {
        id: nuevaPreguntaId,
      });
    }
  }

  formularioMensaje.reset();
  loadingIndicator.classList.add("disabled");
  textoIndicator.innerHTML = "Actualizando información";
  cargarMensajes();

  const botonCerrar = document.getElementById("cerrarModalPreguntar");
  botonCerrar.click();
  
});

cargarMensajes();

async function cargarMensajes() {
  const preguntas = await getDocs(collection(db, "comunidad"));
  const preguntasArregleado = preguntas.docs.map((pregunta) => pregunta.data());
  preguntasArregleado.sort((a, b) => b.fecha.toMillis() - a.fecha.toMillis());

  if (preguntasArregleado.length) {
    const contenedorPreguntas = document.querySelector(
      "#accordionFlushExample2"
    );

    contenedorPreguntas.innerHTML = "";

    preguntasArregleado.forEach((doc) => {
      function mensajesCargar(pregunta) {
        const div = document.createElement("div");
        div.classList.add("accordion-item", "mb-2");

        div.innerHTML = `
                
                <h2 class="accordion-header" id="flush-${pregunta.id}">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse${pregunta.id}" aria-expanded="false" aria-controls="flush-collapse${pregunta.id}">
                <div class="imagen-autorPregunta">
                    <img src="${pregunta.foto}" alt="user" class="usuarioFoto2" />
                </div>
                <p class="pregunta-autor">
                    ${pregunta.pregunta}
                </p>
                </button>
                </h2>

                `;

        if (pregunta.respuestas.length > 0) {
          let respuestasHTML = "";

          respuestasHTML += `
                    
                    <div id="flush-collapse${pregunta.id}" class="accordion-collapse collapse" aria-labelledby="flush-${pregunta.id}"
                    data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                      <div class="mb-5">
                        <div class="container">

                    `;

          pregunta.respuestas.forEach((res) => {
            function cargarRespuesta(respuesta) {
              respuestasHTML += `
                            
                            <div class="flex-comment">
                            <div>
                            <img src="${respuesta.foto
                }" alt="user" class="usuarioFoto2" />
                            </div>
                            <div>
                            <div class="data-autor">
                                <p id="nombre" class="p-autor color-autor">${respuesta.correo
                }</p>
                                <small class="">
                                <p id="fecha" class="p-autor color-time">hace ${calcularTiempoTranscurrido(
                  respuesta.fecha
                )}</p>
                                </small>
                            </div>
                            <div>
                                ${respuesta.mensaje}
                            </div>
                            </div>
                            </div>
                            

                            `;
            }

            cargarRespuesta(res);
          });

          respuestasHTML += `
                    
                    </div>
                        </div>
                        <a href="#" id="${pregunta.id}" class="btn btn-respuesta btn-responder" data-bs-toggle="modal" data-bs-target="#modalResponder">Responder</a>
                    </div>
                    </div>

                    
                    `;
          div.innerHTML += respuestasHTML;
        } else {
          div.innerHTML += `
                    
                    <div id="flush-collapse${pregunta.id}" class="accordion-collapse collapse" aria-labelledby="flush-${pregunta.id}" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body"><div class="mb-2">
                    Sin comentarios...
                    </div>
                    <a href="#" id="${pregunta.id}" class="btn btn-respuesta btn-responder" data-bs-toggle="modal" data-bs-target="#modalResponder">Responder</a></div>
                    </div>


                    `;
        }

        contenedorPreguntas.append(div);
      }

      mensajesCargar(doc);
    });
  }

  agregarRespuesta();
}

function agregarRespuesta() {
  const botonRespuesta = document.querySelectorAll(".btn-respuesta");
  const user = auth.currentUser;

  if (user){

    botonRespuesta.forEach((boton) => {
      boton.addEventListener("click", mostrarModalResponder);
    });

  }else{

    const botonRespuesta = document.querySelectorAll(".btn-respuesta");

    botonRespuesta.forEach(function(boton) {
      boton.setAttribute('data-bs-target', '#modalIniciarSesion3');
    });

  }

  
}

let eventoAnterior;

async function mostrarModalResponder(e) {
  const nombreAresponder = document.getElementById("NombreAResponder");
  const idPregunta = e.currentTarget.id;

  // Eliminar el evento anterior si existe
  if (eventoAnterior) {
    formularioRespuesta.removeEventListener("submit", eventoAnterior);
  }

  // Definir la función que manejará el evento
  function manejarEnvioRespuesta(event) {
    enviarRespuesta(event, idPregunta);
    formularioRespuesta.removeEventListener("submit", manejarEnvioRespuesta);
  }

  // Agregar el nuevo evento de escucha
  formularioRespuesta.addEventListener("submit", manejarEnvioRespuesta);

  // Guardar la referencia al evento actual
  eventoAnterior = manejarEnvioRespuesta;

  const pregCollectionRef = collection(db, "comunidad");
  const query2 = query(pregCollectionRef, where("id", "==", idPregunta));
  const querySnapshot = await getDocs(query2);

  if (!querySnapshot.empty) {
    const userDocument = querySnapshot.docs[0];
    const userData = userDocument.data();
    nombreAresponder.innerHTML = userData.correoAutor;
  }
}

async function enviarRespuesta(e, idPregunta) {
  e.preventDefault();

  const loadingIndicator = document.getElementById("loader-pagina-actualizar");
  const textoIndicator = document.getElementById("info-act");
  textoIndicator.innerHTML = "Agregando respuesta";

  loadingIndicator.classList.remove("disabled");

  const mensajeRespuesta = document.getElementById("mensajeRespuesta").value;
  const fecha = new Date();

  const user = auth.currentUser;

  if (user) {
    const userUID = user.uid;

    const usersCollectionRef = collection(db, "usuarios");
    const query3 = query(usersCollectionRef, where("uid", "==", userUID));
    const querySnapshot2 = await getDocs(query3);

    const comunidadCollectionRef = collection(db, "comunidad");
    //Se busca dentro de la colección algún usuario que tenga la misma UID
    const query2 = query(comunidadCollectionRef, where("id", "==", idPregunta));
    const querySnapshot = await getDocs(query2);

    //Una condicional para que se verifique que se hayan encontrado algún usuario
    if (!querySnapshot.empty && !querySnapshot2.empty) {
      const userDocument = querySnapshot2.docs[0];
      const userData = userDocument.data();

      var respuesta = {
        mensaje: mensajeRespuesta,
        correo: userData.correo,
        foto: userData.foto,
        fecha: fecha,
      };

      await updateDoc(doc(db, "comunidad", idPregunta), {
        respuestas: arrayUnion(respuesta),
      });
    }
  }

  const botonCerrar = document.getElementById("cerrarModalResponder");
  botonCerrar.click();

  formularioRespuesta.reset();
  loadingIndicator.classList.add("disabled");
  cargarMensajes();
  textoIndicator.innerHTML = "Actualizando información";
}

function calcularTiempoTranscurrido(fecha) {
  const fechaActual = new Date();
  const fechaPasada = fecha.toDate();

  const diferenciaEnMilisegundos = fechaActual - fechaPasada;

  const segundos = Math.floor(diferenciaEnMilisegundos / 1000);
  const minutos = Math.floor(segundos / 60);
  const horas = Math.floor(minutos / 60);
  const dias = Math.floor(horas / 24);
  const semanas = Math.floor(dias / 7);
  const meses = Math.floor(dias / 30);
  const años = Math.floor(dias / 365);

  if (segundos < 60) {
    return `${segundos} segundo${segundos !== 1 ? "s" : ""}`;
  } else if (minutos < 60) {
    return `${minutos} minuto${minutos !== 1 ? "s" : ""}`;
  } else if (horas < 24) {
    return `${horas} hora${horas !== 1 ? "s" : ""}`;
  } else if (dias < 7) {
    return `${dias} día${dias !== 1 ? "s" : ""}`;
  } else if (semanas < 4) {
    return `${semanas} semana${semanas !== 1 ? "s" : ""}`;
  } else if (meses < 12) {
    return `${meses} mes${meses !== 1 ? "es" : ""}`;
  } else {
    return `${años} año${años !== 1 ? "s" : ""}`;
  }
}
