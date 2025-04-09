/ A kiválasztott fodrász adatának megjelenítése
const selectedBarber = localStorage.getItem("selectedBarber");
const selectedBarberDiv = document.getElementById("selected-barber-info");

if (selectedBarber) {
  selectedBarberDiv.innerHTML = <p>You're booking with: <strong>${selectedBarber}</strong></p>;
} else {
  selectedBarberDiv.innerHTML = "<p>No barber selected</p>";
}

// Szolgáltatás választás
const serviceSelect = document.getElementById("service-select");

function proceedToTime() {
  const selectedService = serviceSelect.value;
  localStorage.setItem("selectedService", selectedService);
  window.location.href = "calendar.html";  // Tovább a naptár oldalra
}
