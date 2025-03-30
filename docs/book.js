import { db } from './firebase-config.js';
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

document.getElementById('bookingForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const barber = document.getElementById('barber').value;
  const service = document.getElementById('service').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  try {
    await addDoc(collection(db, "appointments"), {
      name,
      phone,
      barber,
      service,
      date,
      time,
      createdAt: new Date()
    });
    alert("Foglalás sikeres!");
  } catch (error) {
    console.error("Hiba a mentésnél: ", error);
    alert("Nem sikerült menteni.");
  }
});
