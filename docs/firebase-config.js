// Firebase SDK importálása
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Firebase konfiguráció
const firebaseConfig = {
  apiKey: "AIzaSyDOmhHpvoffYO4NrG2PMAIX_GAICmtgCX0",
  authDomain: "district45-de4ec.firebaseapp.com",
  projectId: "district45-de4ec",
  storageBucket: "district45-de4ec.firebasestorage.app",
  messagingSenderId: "593842934683",
  appId: "1:593842934683:web:aeceeb1bea68eb9b27873e",
  measurementId: "G-W7Z1LHHYZN"
};

// Firebase inicializálás
const app = initializeApp(firebaseConfig);

// Firebase autentikáció és Firestore inicializálás
const auth = getAuth(app);
const db = getFirestore(app);

// Exportálás, hogy más fájlok is használhassák
export { app, auth, db };
