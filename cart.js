// document
//   .querySelector("#remove-ticket-btn")
//   .addEventListener("click", function () {
//     const cartContainer = (document.querySelector(
//       "#cart-container"
//     ).style.display = "none");

//     //   const emptyCartMessage = `
//     //   <div id="container">
//     //     <div id="cart">
//     //       <p>No ticket in your cart.</p>
//     //       <p>Why not plan your trip?</p>
//     //     </div>
//     //   </div>
//     // `;

//     //   cartContainer.innerHTML = emptyCartMessage;
//   });

fetch(`http://localhost:3000/cart/`)
  .then((response) => response.json())
  .then((data) => {
    if (!data.allTripsofCart || data.allTripsofCart.length === 0) {
      document.querySelector("#container").style.display = "flex";
    } else {
      document.querySelector("#cart-container").style.display = "flex";
      console.log(data);
    }
  });
