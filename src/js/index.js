import '../config/db.js'

import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js"
import { auth, db } from '../config/db.js'
import { getDocs, collection, query, where } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js"


//Función que oculta los botones de acuerdo a si hay una sesión activa o no
const loginCheck = user => {

    const elementosSesionInactiva = document.querySelectorAll('.sesionInactiva')
    const elementosSesionActiva = document.querySelectorAll('.sesionActiva')

    if (user) {

        elementosSesionActiva.forEach(element => element.style.display = 'block')
        elementosSesionInactiva.forEach(element => element.style.display = 'none')
        datosUsuario()

    } else {

        elementosSesionActiva.forEach(element => element.style.display = 'none')
        elementosSesionInactiva.forEach(element => element.style.display = 'block')

        let contenedorCarga = document.getElementById('loader-pagina');

        contenedorCarga.style.visibility = 'hidden';
        setTimeout(function () {
            contenedorCarga.style.opacity = '0';
        }, 100);

    }

}

//Chequea si hay una sesión activa
onAuthStateChanged(auth, async (user) => {

    loginCheck(user)

})

//Lógica para cerrar sesión

document.querySelector('#cerrarSesion').addEventListener('click', async () => {

    let loadingIndicator = document.getElementById('loader-pagina2');
    loadingIndicator.classList.remove("disabled");

    await signOut(auth);
    location.reload();

})

//Mostrar datos del usuario
async function datosUsuario() {

    //Se obtiene la identificación del usuario actual
    const user = auth.currentUser;

    //Verifica que exista
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
            document.getElementById('correo').textContent = userData.correo;
            document.getElementById('usuarioFoto').setAttribute("src", userData.foto);;
        }

    }

    let contenedorCarga = document.getElementById('loader-pagina');

    contenedorCarga.style.visibility = 'hidden';
    setTimeout(function () {
        contenedorCarga.style.opacity = '0';
    }, 100);

}