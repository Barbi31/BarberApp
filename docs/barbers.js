let selectedBarber = null;

// Kiválasztott fodrász kiemelése
function selectBarber(barberName, element) {
  const allBarbers = document.querySelectorAll('.barber-card');
  allBarbers.forEach(barber => barber.classList.remove('selected')); // Mindenki kiemelése eltávolítva

  element.classList.add('selected');  // Kiemeljük a választott fodrászt
  selectedBarber = barberName;  // Mentjük el a kiválasztott fodrászt

  // Engedélyezzük a gombot, ha válaszott fodrász
  document.getElementById('next-btn').disabled = false;
}

// Következő oldalra navigálás
function proceedToBooking() {
  if (selectedBarber !== null) {
    localStorage.setItem("selectedBarber", selectedBarber);  // Mentés a localStorage-ba
    window.location.href = "services.html";  // Átirányítás a következő oldalra
  } else {
    alert("Please select a barber first!");  // Hibaüzenet, ha nincs kiválasztva fodrász
  }
}
