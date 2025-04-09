// Ellenőrizzük, hogy a felhasználó választott-e fodrászt és szolgáltatást
const barber = localStorage.getItem('selectedBarber');
const service = JSON.parse(localStorage.getItem('selectedService'));

if (!barber || !service) {
  alert("Please select a barber and service first.");
  window.location.href = "barbers.html"; // Ha nincs választva fodrász vagy szolgáltatás, visszairányítjuk
}

// Ha minden rendben, beállítjuk a változókat a megfelelő adatokkal
document.getElementById('barber-name').textContent = barber;
document.getElementById('service-name').textContent = service.name;
document.getElementById('service-price').textContent = service.price;
document.getElementById('service-duration').textContent = service.duration;

// Foglalás gomb funkciója
function bookAppointment() {
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const phone = document.getElementById("phone").value;

  // Ellenőrizzük, hogy minden mezőt kitöltött-e a felhasználó
  if (!date || !time || !phone) {
    alert("Please fill in all fields!");
    return;
  }

  // Foglalás mentése a localStorage-ba
  const appointment = {
    barber: barber,
    service: service.name,
    price: service.price,
    date: date,
    time: time,
    phone: phone
  };
  localStorage.setItem("appointment", JSON.stringify(appointment));

  // Visszairányítjuk a felhasználót a summary oldalra
  window.location.href = "summary.html";
}
