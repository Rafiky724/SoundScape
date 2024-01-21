import '../config/db.js'
import { auth, db } from '../config/db.js'
import { addDoc, getDocs, collection, query, where, updateDoc, doc } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js"
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

onAuthStateChanged(auth, async (user) => {

    loginCheck(user)

})

//Muestra los elementos de acuerdo a si la sesión está activa o no
const loginCheck = user => {

    const botonNoSesion = document.getElementById("agregarComentarioNo");
    const boton = document.getElementById("agregarComentario");

    if (user) {

        botonNoSesion.classList.add("disabled");
        boton.classList.remove("disabled");

    }
}

const formularioMensaje = document.querySelector('#formularioMensaje');


formularioMensaje.addEventListener('submit', async (e) => {

    e.preventDefault()

    const loadingIndicator = document.getElementById('loader-pagina2');

    loadingIndicator.classList.remove("disabled");
    
    const mensaje = document.getElementById("mensajeTexto").value;

    const user = auth.currentUser;

    if (user) {

        //Se guarda su UID única
        const userUID = user.uid;
        //Se guarda la colección de 'usuarios'
        const usersCollectionRef = collection(db, 'usuarios');
        //Se busca dentro de la colección algún usuario que tenga la misma UID
        const query2 = query(usersCollectionRef, where('uid', '==', userUID));
        const querySnapshot = await getDocs(query2);

        //Una condicional para que se verifique que se hayan encontrado algún usuario
        if (!querySnapshot.empty) {

            //Se guarda todos los datos del usuario con esa UID
            const userDocument = querySnapshot.docs[0];
            const userData = userDocument.data();

            // Accede a las etiquetas <p> por su ID y actualiza su contenido con los datos del usuario
            document.getElementById('nombre').textContent = userData.nombre + ' ' + userData.apellidos;
            
            const docRef = await addDoc(collection(db, 'comunidad'),{

                correoAutor: userData.correo,
                foto: userData.foto,
                pregunta: mensaje,
                respuestas: []

            });

            const nuevaPreguntaId = docRef.id;

            await updateDoc(doc(db, 'comunidad', nuevaPreguntaId),{

                id: nuevaPreguntaId

            });

        }

    }

    formularioMensaje.reset();
    loadingIndicator.classList.add("disabled");
    cargarMensajes()
    
});


cargarMensajes()

async function cargarMensajes(){

    const preguntas = await getDocs(collection(db, 'comunidad'));
    const preguntasArregleado = preguntas.docs.map(pregunta => pregunta.data());

    if (preguntasArregleado.length){

        const contenedorPreguntas = document.querySelector("#accordionFlushExample2");

        contenedorPreguntas.innerHTML = "";

        preguntasArregleado.forEach(doc => {

            function mensajesCargar(pregunta){

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
                <div id="flush-collapse${pregunta.id}" class="accordion-collapse collapse" aria-labelledby="flush-${pregunta.id}" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body"><div class="mb-2">
                Sin comentarios...
                </div>
                <a href="#" class="btn btn-responder" data-bs-toggle="modal" data-bs-target="#modalResponder">Responder</a></div>
                </div>
                

                `

                contenedorPreguntas.append(div);

            }

            mensajesCargar(doc)

        })

    }

}

