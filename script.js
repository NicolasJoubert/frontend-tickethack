document.querySelector('#search_button').addEventListener('click', function() {
    const departureCity= document.querySelector('#departure_city').value;
    const arrivalCity= document.querySelector('#arrival_city').value;
    const departureDate= document.querySelector('#departure_date').value;

    fetch(`http://localhost:3000/search/${departureCity}/${arrivalCity}/${departureDate}`)
    .then (response=>response.json())
  .then(data => {
   console.log(data);
 });
})


