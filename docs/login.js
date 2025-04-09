mport { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { app } from './firebase-config.js';

const auth = getAuth(app);
const db = getFirestore(app);

window.login = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const phone = document.getElementById("phone").value;  // Telefonszám beszerzése
  const errorElement = document.getElementById("error-message");

  try {
    // Próbálj meg bejelentkezni
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Telefonszám mentése a Firestore-ba, ha a felhasználó már létezik
    await setDoc(doc(db, "users", user.uid), {
      phone: phone,      // Telefonszám mentése
      email: email       // Email mentése
    });

    // Ha sikeres, átirányítás a foglalás oldalra
    window.location.href = "book.html";
  } catch (error) {
    // Ha nem létezik ilyen felhasználó, próbáljuk meg regisztrálni
    if (error.code === 'auth/user-not-found') {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // A regisztrált felhasználó telefonszámának mentése
        await setDoc(doc(db, "users", user.uid), {
          phone: phone,
          email: email
        });

        // Sikeres regisztráció után átirányítás
        window.location.href = "book.html";
      } catch (err) {
        errorElement.textContent = "Registration failed: " + err.message;
      }
    } else {
      // Más hiba esetén hibaüzenet megjelenítése
      errorElement.textContent = "Login failed: " + error.message;
    }
  }
};
