import '../config/db.js'

import { storage } from '../config/db.js'

import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js"
import { auth, db } from '../config/db.js'
import { getDocs, collection, query, where, updateDoc, doc } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js"
import { getStorage, ref, uploadBytes, getDownloadURL } from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-storage.js';

//Función que oculta los botones de acuerdo a si hay una sesión activa o no
const loginCheck = user => {

    const botonHomeStudio = document.getElementById('botonHomeSutdio');
    const elementosSesionInactiva = document.querySelectorAll('.sesionInactiva')
    const elementosSesionActiva = document.querySelectorAll('.sesionActiva')
    const botonHomeStudio2 = document.getElementById('botonHomeSutdio2');

    if (user) {

        botonHomeStudio.addEventListener("click", redireccionarHomeStudio)
        elementosSesionActiva.forEach(element => element.style.display = 'block')
        elementosSesionInactiva.forEach(element => element.style.display = 'none')
        datosUsuario()
        botonHomeStudio2.addEventListener("click", redireccionarHomeStudio)

    } else {


        botonHomeStudio.addEventListener("click", mostrarModalIniciarSesion)
        elementosSesionActiva.forEach(element => element.style.display = 'none')
        elementosSesionInactiva.forEach(element => element.style.display = 'block')

        let contenedorCarga = document.getElementById('loader-pagina');

        botonHomeStudio2.addEventListener("click", mostrarModalIniciarSesion)

        contenedorCarga.style.visibility = 'hidden';
        setTimeout(function () {
            contenedorCarga.style.opacity = '0';
        }, 100);

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
            document.getElementById('usuarioFoto').setAttribute("src", userData.foto);

            document.getElementById('foto-modal-cambiar').setAttribute("src", userData.foto);
            document.getElementById('modalNombre').value = userData.nombre;
            document.getElementById('modalApellido').value = userData.apellidos;

        }

    }

    let contenedorCarga = document.getElementById('loader-pagina');

    contenedorCarga.style.visibility = 'hidden';
    setTimeout(function () {
        contenedorCarga.style.opacity = '0';
    }, 100);

}

document.querySelector('#cerrarSesion').addEventListener('click', async () => {

    let loadingIndicator = document.getElementById('loader-pagina2');
    loadingIndicator.classList.remove("disabled");

    await signOut(auth);
    location.reload();

})

// Variable en donde se guarda la imagen de la foto de perfil
var imagenItem;

let alertArchivoInavalido = document.getElementById('loginAlertArchivoNoApto');
let alertArchivoDimension = document.getElementById('loginWarningArchivo');

function verificarArchivo(file) {

    const tiposPermitidos = ['image/jpeg', 'image/jpg', 'image/png'];
    return tiposPermitidos.includes(file.type);
}

function validarImagenCuadrada(file) {

    const img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = function() {
        const esCuadrada = img.width === img.height;
        
        if (!esCuadrada) {

            alertArchivoDimension.classList.remove("disabled");
        }
    };
}

//Función que se encarga de cargar la foto de perfil y mostrarla
function getFile(e) {

    var fileItem = e.target.files[0];
    
    var imgFotoPerfil = document.getElementById('foto-modal-cambiar');

    if (fileItem && verificarArchivo(fileItem)) {

        
        alertArchivoInavalido.classList.add("disabled");
        alertArchivoDimension.classList.add("disabled");

        var reader = new FileReader();

        reader.onload = function (e) {
            imgFotoPerfil.setAttribute("src", e.target.result);
        };

        reader.readAsDataURL(fileItem);

        validarImagenCuadrada(fileItem);

        imagenItem = fileItem;

    }else{

        alertArchivoDimension.classList.add("disabled");
        alertArchivoInavalido.classList.remove("disabled");
        imagenItem = undefined

    }
    
}


document.querySelector("#guardarNuevaInfo").addEventListener("click", guardarCambios);
document.getElementById("modalFotos").addEventListener('change', getFile);

//Función que se encarga de actualizar los datos del usuario
async function guardarCambios() {


    let loadingActualizar = document.getElementById('loader-pagina-actualizar');
    loadingActualizar.classList.remove("disabled");

    const userUID = auth.currentUser.uid;
    const usersCollectionRef = collection(db, 'usuarios');
    const query2 = query(usersCollectionRef, where('uid', '==', userUID));
    const querySnapshot = await getDocs(query2);

    const nuevoNombre = document.getElementById('modalNombre').value;
    const nuevosApellidos = document.getElementById('modalApellido').value;

    if (!querySnapshot.empty) {

        //Se guarda todos los datos del usuario con esa UID
        const userDocument = querySnapshot.docs[0];

        try {

            await updateDoc(doc(db, 'usuarios', userDocument.id), {

                nombre: nuevoNombre,
                apellidos: nuevosApellidos

            });


            if (imagenItem != undefined) {

                const userData = userDocument.data();
                const storageRef = ref(storage, `FotosDePerfil/${userData.correo}/FotoDe${userData.correo}`);

                try {
                    //Subir el archivo a Firebase Storage
                    await uploadBytes(storageRef, imagenItem);

                    //Obtener la URL de la imagen recién subida
                    const imageUrl = await getDownloadURL(storageRef);

                    await updateDoc(doc(db, 'usuarios', userDocument.id), {

                        foto: imageUrl,
        
                    });

                } catch (error) {
                    console.error('Error al subir la imagen:', error);
                }

            }


        } catch (error) {
            console.error('Error al actualizar el campo "nombre":', error);
        }


    }

    loadingActualizar.classList.add("disabled");
    location.reload();

}