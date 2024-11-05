document.querySelector("#search_button").addEventListener("click", function () {
  const departureCity = document.querySelector("#departure_city").value;
  const arrivalCity = document.querySelector("#arrival_city").value;
  const departureDate = document.querySelector("#departure_date").value;

  fetch(
    `http://localhost:3000/search/${departureCity}/${arrivalCity}/${departureDate}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const resultCard = document.querySelector("#beforebooking");

      if (data.result && data.trip.length > 0) {
        for (let i = 0; i < data.trip.length; i++) {
          const tripDetails = `<div class="trip-info">
                        <h3>Départ: ${data.trip[i].departure}</h3>
                        <p>Arrivée: ${data.trip[i].arrival}</p>
                        <p>Date: ${new Date(data.trip[i].date).toLocaleDateString()}</p>
                        <p>Prix: ${data.trip[i].price} €</p>
                    </div>`;
          resultCard.innerHTML += tripDetails;
        }
      } else {
        resultCard.innerHTML = `<p>Voyage non trouvé<p>`;
      }
    });
});
