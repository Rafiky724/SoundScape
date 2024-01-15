// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import { getAuth, setPersistence, browserSessionPersistence } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js"
import { getFirestore  } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js"

import { getStorage } from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-storage.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjEgQjvaaYcumZMYm4hx6h8KDbRt-mYe0",
  authDomain: "soundscape-f928e.firebaseapp.com",
  projectId: "soundscape-f928e",
  storageBucket: "soundscape-f928e.appspot.com",
  messagingSenderId: "1002179085730",
  appId: "1:1002179085730:web:b6aaf42b1d98dbb90c5efb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth(app)




setPersistence(auth, browserSessionPersistence);
export { auth };

export const db = getFirestore(app);

export const storage = getStorage();