import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { setDoc, doc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

window.login = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const phone = document.getElementById("phone").value;
  const errorElement = document.getElementById("error-message");

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Telefonszám mentése a Firestore-ba
    await setDoc(doc(db, "users", user.uid), {
      phone: phone,
      email: email
    });

    // Átirányítás a foglalás oldalra
    window.location.href = "book.html";
  } catch (error) {
    errorElement.textContent = "Login failed: " + error.message;
  }
};
