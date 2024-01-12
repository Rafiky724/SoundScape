import '../config/db.js'

import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js"
import { auth } from '../config/db.js'


//Función que oculta los botones de acuerdo a si hay una sesión activa o no
const loginCheck = user => {

    const elementosSesionInactiva = document.querySelectorAll('.sesionInactiva')
    const elementosSesionActiva = document.querySelectorAll('.sesionActiva')

    if (user){

        elementosSesionActiva.forEach(element => element.style.display = 'block')
        elementosSesionInactiva.forEach(element => element.style.display = 'none')

    } else {

        elementosSesionActiva.forEach(element => element.style.display = 'none')
        elementosSesionInactiva.forEach(element => element.style.display = 'block')

    }

}

//Chequea si hay una sesión activa
onAuthStateChanged(auth, async (user) => {

    loginCheck(user)
    console.log(user)
    let contenedorCarga = document.getElementById('loader-pagina');

    contenedorCarga.style.visibility = 'hidden';
    setTimeout(function () {
        contenedorCarga.style.opacity = '0';
    }, 100);

})

//Lógica para cerrar sesión

document.querySelector('#cerrarSesion').addEventListener('click', async () => {

    await signOut(auth);
    location.reload();

})