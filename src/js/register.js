import '../config/db.js'

import { createUserWithEmailAndPassword, sendEmailVerification, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { auth, db } from '../config/db.js';
import { addDoc, collection } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js"

const formulario = document.querySelector('#registerForm');

const formularioRegistrar = document.querySelector('#registerForm');
var registerAlert = document.getElementById("RegisterAlertSuccess");
var correoEnUso = document.getElementById("RegisterAlertCorreoUso");
var contraseñaDebil = document.getElementById("RegisterAlertContraDebil");
var correoNoValido = document.getElementById("RegisterAlertCorrNoVali");
var salioMal = document.getElementById("RegisterAlertErrorMal");
var verificarPass = document.getElementById("RegisterAlertVerificarCon");

onAuthStateChanged(auth, async (user) => {
  
    if (user) {
  
      window.location.href = "../../index.html";
  
    }
  
  })
  

//Se activa el evento al dar al botón de registrar
formulario.addEventListener('submit', async (e) => {
    e.preventDefault();

    //Se guardan en constantes los valores de los campos
    const email = document.querySelector('#inputEmailID').value;
    const password = document.querySelector('#inputContraseñaID').value;
    const passwordConfirm = document.querySelector('#inputContraseña2ID').value;
    const nombre = document.querySelector('#inputNombreID').value;
    const apellidos = document.querySelector('#inputApellidoID').value;
    const fechaNacimiento = document.querySelector('#inputFechaID').value;

    const radioButtons = document.querySelectorAll('input[name="gridRadios"]');

    //Determina el género seleccionado
    let genero = '';
    radioButtons.forEach(function (radioButton) {
        if (radioButton.checked) {
            genero = radioButton.value;
        }
    });


    const loadingIndicator = document.getElementById('loader-pagina');

    loadingIndicator.classList.remove("disabled");

    //Se verificar primero que ambas contraseñan coincidan
    if (password !== passwordConfirm) {

        //Se muestra el mensaje de alerta
        verificarPass.style.display = "block";
        loadingIndicator.classList.add("disabled");

    } else {

        try {

            //Se crea el usuario en la base de datos con las funciones de Firebase
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password);

            //Se envía un código de verifcación al correo
            await sendEmailVerification(userCredentials.user);

            //Se guarda la inforrmación del usuario en una colección
            await addDoc(collection(db, 'usuarios'), {

                uid: userCredentials.user.uid,
                correo: email,
                nombre: nombre,
                apellidos: apellidos,
                fechaNacimiento: fechaNacimiento,
                genero: genero,
                foto: 'https://firebasestorage.googleapis.com/v0/b/soundscape-f928e.appspot.com/o/IconoPerfil.jpg?alt=media&token=6d79557b-1141-4fe5-b0bf-f92ec866802f'

            });

            // Otros mensajes de alerta ocultados
            verificarPass.style.display = "none";
            correoEnUso.style.display = "none";
            correoNoValido.style.display = "none";
            contraseñaDebil.style.display = "none";
            salioMal.style.display = "none";

            registerAlert.style.display = "block";

            //Se cierra la sesión del usuario registrado
            await signOut(auth);

            //Se resetea el formulario de registro
            formularioRegistrar.reset();
            loadingIndicator.classList.add("disabled");


        } catch (error) {


            //Se muestra algún mensaje en caso de error

            if (error.code === 'auth/email-already-in-use') {
                correoEnUso.style.display = "block";
            } else if (error.code === 'auth/invalid-email') {
                correoNoValido.style.display = "block";
            } else if (error.code === 'auth/weak-password') {
                contraseñaDebil.style.display = "block";
            } else {
                console.log(error);
                salioMal.style.display = "block";
            }

            loadingIndicator.classList.add("disabled");

        }

    }

});