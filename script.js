
document.getElementById("booking-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const bikes = Array.from(document.getElementById("bikes").selectedOptions).map(opt => opt.value).join(", ");
  const date = document.getElementById("date").value;
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const street = document.getElementById("street").value;
  const city = document.getElementById("city").value;
  const zip = document.getElementById("zip").value;
  const country = document.getElementById("country").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  const confirmation = document.getElementById("confirmation");
  confirmation.style.display = "block";
  confirmation.innerHTML = `
    <p>✅ Vielen Dank <strong>${firstName} ${lastName}</strong> für deine Anfrage!</p>
    <p>Du hast folgende Fahrräder gebucht: <strong>${bikes}</strong> am <strong>${date}</strong>.</p>
    <p>Adresse: ${street}, ${zip} ${city}, ${country}</p>
    <p>Kontakt: ${email}, ${phone}</p>
  `;
});
