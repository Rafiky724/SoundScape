import "../config/db.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js"
import { auth, db } from '../config/db.js'

const loadingIndicator2 = document.getElementById("loader-pagina2");
onAuthStateChanged(auth, async (user) => {

    if (user) {

        loadingIndicator2.classList.add("disabled");

    } else {

        
        window.location.href = "../../index.html";

    }

})