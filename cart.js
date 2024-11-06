fetch(`http://localhost:3000/cart/`)
  .then((response) => response.json())
  .then((data) => {
    const cartContainer = document.querySelector("#cart-container");
    if (!data.allTripsofCart || data.allTripsofCart.length === 0) {
      document.querySelector("#container").style.display = "flex";
    } else {
      cartContainer.style.display = "flex";
      let cartHTML = "";
      for (let cartItem of data.allTripsofCart) {
        const { departure, arrival, date, _id } = cartItem;
        // CREATION DE LA CARTE HTML PUR LA REUTILISER ENSUITE
        cartHTML += `
        <div class="ticket-item">
          <div class="destination">
            <p class='departure_city'>${departure}</p>
            >
            <p class='arrival_city'>${arrival}</p>
          </div>
          <p class ='departure_date'>${new Date(date).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}</p>
          <p class='priceTrip'>${cartItem.price} €</p>
          <button class="remove-ticket-btn" data-id="${_id}">X</button>
        </div>
      `;
      }

      // J AJOUTE CHAQUE VOYAGE DE LA BDD
      cartContainer.innerHTML = `
      <div id="cart-ticket">
        <p class="title-cart">My cart</p>
        ${cartHTML}
        <div id="purchase-container">
          <p>Total : ${calculateTotalCart(data.allTripsofCart)} €</p>
          <button id="purchase-btn">Purchase</button>
        </div>
      </div>
    `;
      // SUPPRESSION DES CARTES
      const buttons = document.querySelectorAll(`.remove-ticket-btn`);
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function () {
          console.log("bouton cliqué");
          const tripId = this.getAttribute("data-id");
          console.log(tripId);
          fetch(`http://localhost:3000/cart/${tripId}`, {
            method: "DELETE",
          })
            .then((response) => response.json())
            .then(data);
          console.log("suppression ok");
          if (data) {
            this.closest(".ticket-item").remove();
          }
        });
      }

      // AJOUT DANS LA BDD DES VOYAGES BOOKES
      const purchaseButton = document.querySelector(`#purchase-btn`);
      purchaseButton.addEventListener("click", function () {
        const tripData = data.allTripsofCart.map((trip) => ({
          departure: trip.departure,
          arrival: trip.arrival,
          date: trip.date,
          price: trip.price,
        }));

        fetch("http://localhost:3000/cart/purchase", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(tripData),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.result) {
              console.log("Purchase successful!");
              window.location.href = "bookings.html";
            } else {
              console.log("Purchase failed.");
            }
          });
      });

      function calculateTotalCart(trips) {
        let total = 0;
        for (let i = 0; i < trips.length; i++) {
          total += trips[i].price;
        }
        return total;
      }
      console.log(data);
    }
  });
