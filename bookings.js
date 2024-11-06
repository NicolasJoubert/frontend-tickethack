  fetch(
    `http://localhost:3000/bookings`
  )
    .then((response) => response.json())
    .then((data) => {
console.log(data);
    if (data.result && data.allBookings.length > 0) {
    
      document.querySelector("#booking_container_blank").style.display = "none";

        for (let i = 0; i < data.allBookings.length; i++) {
          const bookings = document.querySelector("#bookings");

          const bookingDetails = `<div id="bookings">
                        <h3 id="book_depart_city">${data.allBookings[i].departure} </h3>
                        <span> > </span>
                        <p id="book_arrival_city">${data.allBookings[i].arrival} </p>
                        <p id="book_depart_date"> ${new Date(data.allBookings[i].date).toLocaleDateString()} </p>
                        <p id="book_price"> ${data.allBookings[i].price} € </p>
                        <p id= "remaining_time"> TIME REST </p>

                        </div>`;
                        bookings_cont.innerHTML += bookingDetails;
    }}
  
  else {
    document.querySelector("#booking_container_blank").style.display = "flex";


  }})