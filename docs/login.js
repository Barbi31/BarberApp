import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { app } from './firebase-config.js';

const auth = getAuth(app);
const db = getFirestore(app);

window.login = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const phone = document.getElementById("phone").value;  // Telefonszám beszerzése
  const errorElement = document.getElementById("error-message");

  try {
    // Bejelentkezés a Firebase Auth használatával
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Telefonszám és email mentése a Firestore-ba
    await setDoc(doc(db, "users", user.uid), {
      phone: phone,      // Telefonszám mentése
      email: email       // Email mentése
    });

    // Ha a bejelentkezés sikeres, átirányítás a foglalás oldalra
    window.location.href = "book.html";
  } catch (error) {
    // Hibaüzenet megjelenítése
    errorElement.textContent = "Login failed: " + error.message;
  }
};
