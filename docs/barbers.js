let selectedBarber = null;

// Kiválasztott fodrász kiemelése
function selectBarber(barberName, element) {
  // Előzőleg kiválasztott fodrász eltávolítása
  const previousSelected = document.querySelector(".barber-card.selected");
  if (previousSelected) {
    previousSelected.classList.remove("selected");
  }

  // Jelenlegi fodrász kiemelése
  element.classList.add("selected");
  selectedBarber = barberName;

  // A kiválasztott fodrász nevét kiírjuk
  document.getElementById("selected-barber").innerHTML = <p>You selected: <strong>${barberName}</strong></p>;

  // A gomb engedélyezése
  document.getElementById("next-btn").disabled = false;
}

// Következő oldalra navigálás
function proceedToBooking() {
  // Tároljuk el a kiválasztott fodrászt, és irányítjuk a következő oldalra
  localStorage.setItem("selectedBarber", selectedBarber);
  window.location.href = "services.html"; // Következő oldal
}
