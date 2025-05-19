document.getElementById("booking-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const selectedOptions = Array.from(document.getElementById("bikes").selectedOptions);
  const bikes = selectedOptions.map(option => option.value).join(", ");
  const date = document.getElementById("date").value;
  const confirmation = document.getElementById("confirmation");

  confirmation.style.display = "block";
  confirmation.innerHTML = `<p>✅ Deine Anfrage für <strong>${bikes}</strong> am <strong>${date}</strong> wurde gesendet.</p>`;
});
