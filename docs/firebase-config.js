
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDOmhHpvoffYO4NrG2PMAIX_GAICmtgCX0",
  authDomain: "district45-de4ec.firebaseapp.com",
  projectId: "district45-de4ec",
  storageBucket: "district45-de4ec.appspot.com",
  messagingSenderId: "593842934683",
  appId: "1:593842934683:web:aeceeb1bea68eb9b27873e",
  measurementId: "G-W7Z1LHHYZN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.login = function () {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const error = document.getElementById('error');

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = 'book.html';
    })
    .catch((err) => {
      error.textContent = "Login failed: " + err.message;
    });
};
