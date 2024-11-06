document
  .querySelector("#remove-ticket-btn")
  .addEventListener("click", function () {
    const cartContainer = (document.querySelector(
      "#cart-container"
    ).style.display = "none");

    //   const emptyCartMessage = `
    //   <div id="container">
    //     <div id="cart">
    //       <p>No ticket in your cart.</p>
    //       <p>Why not plan your trip?</p>
    //     </div>
    //   </div>
    // `;

    //   cartContainer.innerHTML = emptyCartMessage;
  });
