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
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// Firestore inicializálás
const db = getFirestore(app);

// Foglalás mentése
window.bookAppointment = async function () {
  const email = auth.currentUser?.email || "Anonymous";
  const serviceSelect = document.getElementById("service");
  const duration = parseInt(serviceSelect.value);
  const serviceName = serviceSelect.options[serviceSelect.selectedIndex].text;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const phone = document.getElementById("phone").value;
  const error = document.getElementById("error");

  if (!date || !time || !duration || !phone) {
    alert("Please fill in all fields.");
    return;
  }

  try {
    await addDoc(collection(db, "appointments"), {
      email,
      phone,
      date,
      time,
      duration,
      serviceName,
      createdAt: new Date()
    });
    alert("Appointment booked successfully!");
  } catch (err) {
    console.error("Error adding document:", err);
    alert("Something went wrong.");
  }
};
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AZZ-IDE-JÖN-A-TE-APIKULCSOD",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
