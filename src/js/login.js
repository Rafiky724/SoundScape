import "../config/db.js";
import {
  signInWithEmailAndPassword, onAuthStateChanged,
  sendPasswordResetEmail,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { auth } from "../config/db.js";

const IniciarSesionForm = document.querySelector("#loginForm");
const loadingIndicator = document.getElementById("loader-pagina");
const inputRestablecerContraseña = document.getElementById("inputRestablecerContraseña");
const botonRestablecerContraseña = document.getElementById("botonRestablecerContraseña");
const successAlert = document.querySelector(".alert-success");
const errorAlert = document.querySelector(".alert-danger2");
const loadingIndicator2 = document.getElementById("loader-pagina2");


window.onload = function() {
  VerificadorUsuarioLog();
};

async function VerificadorUsuarioLog() {
  try {
    const user = await auth.currentUser;

    if (user) {
      //console.log("Sesión activa");
      window.location.href = "../../index.html";
    } else {
      //console.log("Sesión no activa");
      // Si no hay usuario logueado, continuar con la página de inicio de sesión
      loadingIndicator2.classList.add("disabled");
    }
  } catch (error) {
    // Manejar errores de Firebase
    console.error("Error al verificar el usuario:", error);
    // Podrías redirigir a una página de error o realizar otras acciones según el error
  }
}

/*
await VerificadorUsuarioLog();

async function VerificadorUsuarioLog(){

  const user = await auth.currentUser;

  console.log(user);

  if (user) {

    window.location.href = "../../index.html";

  }else{

    loadingIndicator2.classList.add("disabled");

  }

  
  onAuthStateChanged(auth, async (user) => {

    if (user) {
  
      window.location.href = "../../index.html";
  
    }else{
  
      loadingIndicator2.classList.add("disabled");
  
    }
  
  })

}*/


IniciarSesionForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  loadingIndicator.classList.remove("disabled");
  const email = IniciarSesionForm["inputEmailSesion"].value;
  const password = IniciarSesionForm["inputPasswordSesion"].value;
  var loginAlert = document.getElementById("loginAlert");

  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);

    //TIENE QUE SE TRUE PARA CONFIRMAR VERIFICACION
    if (credentials.user.emailVerified === true) {
      loginAlert.style.display = "none";
      window.location.href = "../../index.html";
    } else {
      // Si el correo no está verificado, mostrar un mensaje de error
      loginAlert.innerText =
        "Tu correo electrónico aún no ha sido verificado. Por favor, verifica tu correo antes de iniciar sesión.";
      loginAlert.style.display = "block";
      await signOut(auth);
    }

    loadingIndicator.classList.add("disabled");
  } catch (error) {
    console.log(error);
    loginAlert.style.display = "block";
    loadingIndicator.classList.add("disabled");
  }
});


//Recuperar contraseña

botonRestablecerContraseña.addEventListener("click", () => {
  const email = inputRestablecerContraseña.value;

  loadingIndicator.classList.remove("disabled");

  sendPasswordResetEmail(auth, email)
      .then(() => {
          successAlert.style.display = "block";
          errorAlert.style.display = "none";
          loadingIndicator.classList.add("disabled");
      })
      .catch((error) => {
          errorAlert.style.display = "block";
          successAlert.style.display = "none";
          console.error(error);
          loadingIndicator.classList.add("disabled");
      });
});