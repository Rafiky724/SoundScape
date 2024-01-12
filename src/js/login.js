import '../config/db.js'
import { signInWithEmailAndPassword, sendPasswordResetEmail, signOut } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import { auth } from '../config/db.js'

const IniciarSesionForm = document.querySelector('#loginForm');
const loadingIndicator = document.getElementById('loader-pagina');


IniciarSesionForm.addEventListener('submit', async e => {

    e.preventDefault();

    
    loadingIndicator.classList.remove("disabled");
    const email = IniciarSesionForm['inputEmailSesion'].value;
    const password = IniciarSesionForm['inputPasswordSesion'].value;
    var loginAlert = document.getElementById("loginAlert");


    try {
        
        const credentials = await signInWithEmailAndPassword(auth, email, password)
        
        //TIENE QUE SE TRUE PARA CONFIRMAR VERIFICACION
        if (credentials.user.emailVerified === false) {
            loginAlert.style.display = "none";
            window.location.href = "../../index.html";
        } else {
            // Si el correo no está verificado, mostrar un mensaje de error
            loginAlert.innerText = "Tu correo electrónico aún no ha sido verificado. Por favor, verifica tu correo antes de iniciar sesión.";
            loginAlert.style.display = "block";
            await signOut(auth);

        }

        loadingIndicator.classList.add("disabled");

    } catch (error) {
        
        console.log(error)
        loginAlert.style.display = "block";
        loadingIndicator.classList.add("disabled");

    }

})