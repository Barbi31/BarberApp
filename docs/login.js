import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { app } from './firebase-config.js';

const auth = getAuth(app);
const db = getFirestore(app);

window.login = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const phone = document.getElementById("phone").value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Telefonszám mentése
    await setDoc(doc(db, "users", user.uid), {
      phone: phone,
      email: email
    });

    // Átirányítás
    window.location.href = "booknow.html";
  } catch (error) {
    document.getElementById("error-message").textContent = "Login failed: " + error.message;
  }
}
