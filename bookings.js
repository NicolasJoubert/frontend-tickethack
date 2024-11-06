document.querySelector("#BUYBUTTON").addEventListener("click", function () {

  fetch(
    `http://localhost:3000/bookings`
  )
    .then((response) => response.json())
    .then((data) => {
     
      if (data.result && data.length > 0) {
        console.log(document.querySelector("#booking_container_blank"));

        document.querySelector("#booking_container_blank").style.display = "none";

        for (let i = 0; i < data.length; i++) {
          const bookingDetails = `<div id="bookings">
                        <h3 id="book_depart_city">${data[i].departure} </h3>
                        <span> > </span>
                        <p id="book_arrival_city">${data[i].arrival} </p>
                        <p id="book_depart_date"> ${new Date(data[i].date).toLocaleDateString()} </p>
                        <p id="book_price"> ${data[i].price} € </p>

				          
                        </div>`;
          bookings.innerHTML += bookingDetails;
    }}})})