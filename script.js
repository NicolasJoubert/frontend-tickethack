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
      const resultCard = document.querySelector("#result_card");

      if (data.result && data.trip.length > 0) {
        console.log(document.querySelector("#beforebooking"));

        document.querySelector("#beforebooking").style.display = "none";
        for (let i = 0; i < data.trip.length; i++) {
          const tripDetails = `<div class="trip-info">
                        <h3 id="res_depart_city">${data.trip[i].departure} </h3>
                        <span> > </span>
                        <p id="res_arrival_city">${data.trip[i].arrival} </p>
                        <p id="res_depart_date"> ${new Date(data.trip[i].date).toLocaleDateString()} </p>
                        <p id="res_price"> ${data.trip[i].price} € </p>

				                    <button class="res_trip" id=" btn-book-${data.trip[i]._id}">Book</button>


                        </div>`;
          resultCard.innerHTML += tripDetails;
        }
        const buttons = document.querySelectorAll(`.res_trip`);
        for (let i = 0; i < buttons.length; i++) {
          buttons[i].addEventListener("click", function () {
            console.log("Click detected on button");
            const tripData = {
              departure: data.trip[i].departure,
              arrival: data.trip[i].arrival,
              date: data.trip[i].date,
              price: data.trip[i].price,
            };
            console.log(tripData);

            fetch("http://localhost:3000/book", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(tripData),
            })
              .then((response) => response.json())
              .then((data) => {
                if (data.result) {
                  console.log("Trip added to cart successfully!");
                } else {
                  console.log("Failed to add trip to cart.");
                }
              });
          });
        }

        console.log(buttons);
      } else {
        resultCard.innerHTML = `<p>Voyage non trouvé<p>`;
      }
    });
});
