// Firebase SDK importálása (modulként használva)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// A te Firebase-konfigurációd
const firebaseConfig = {
  apiKey: "AIzaSyDOmhHpvoffYO4NrG2PMAIX_GAICmtgCX0",
  authDomain: "district45-de4ec.firebaseapp.com",
  projectId: "district45-de4ec",
  storageBucket: "district45-de4ec.appspot.com",
  messagingSenderId: "593842934683",
  appId: "1:593842934683:web:aeceeb1bea68eb9b27873e",
  measurementId: "G-W7Z1LHHYZN"
};

// Firebase inicializálás
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Bejelentkezési függvény
window.login = function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorElement = document.getElementById("error");

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "book.html";
    })
    .catch((err) => {
      errorElement.textContent = "Login failed: " + err.message;
    });
};
