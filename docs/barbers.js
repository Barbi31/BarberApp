/ Kiválasztott fodrász változó
let selectedBarber = null;

function selectBarber(barberName, element) {
  // Előzőleg kiválasztott fodrász kiemelése eltávolítással
  const previousSelected = document.querySelector(".barber.selected");
  if (previousSelected) {
    previousSelected.classList.remove("selected");
  }

  // Új fodrász kiemelése
  element.classList.add("selected");
  selectedBarber = barberName;
  
  // Megjelenítjük a kiválasztott fodrász nevét
  document.getElementById("selected-barber").innerHTML = <p>You selected: <strong>${barberName}</strong></p>;

  // Következő gomb engedélyezése
  document.getElementById("next-btn").disabled = false;
}

// A következő oldalra navigálás
function proceedToBooking() {
  // Tároljuk el a kiválasztott fodrászt, és irányítjuk a foglalás oldalra
  localStorage.setItem("selectedBarber", selectedBarber);
  window.location.href = "services.html";  // Tovább a szolgáltatások oldalra
}
