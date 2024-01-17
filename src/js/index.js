import '../config/db.js'

import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js"
import { auth, db } from '../config/db.js'


//Función que oculta los botones de acuerdo a si hay una sesión activa o no
const loginCheck = user => {

    const botonHomeStudio = document.getElementById('botonHomeSutdio');

    if (user) {

        botonHomeStudio.addEventListener("click", redireccionarHomeStudio)

    } else {


        botonHomeStudio.addEventListener("click", mostrarModalIniciarSesion)

    }

}

function mostrarModalIniciarSesion() {

    const modal = new bootstrap.Modal(document.getElementById("modalIniciarSesion"));
    modal.show();

}

function redireccionarHomeStudio() {

    window.location.href = "../src/components/formulario.html";

}

//Chequea si hay una sesión activa
onAuthStateChanged(auth, async (user) => {

    loginCheck(user)

})
