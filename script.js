document.querySelector('#search_button').addEventListener('click', function() {
    const departureCity= document.querySelector('#departure_city').value;
    const arrivalCity= document.querySelector('#arrival_city').value;
    const departureDate= document.querySelector('#departure_date').value;

    fetch(`http://localhost:3000/search/${departureCity}/${arrivalCity}/${departureDate}`)
    .then (response=>response.json())
  .then(data => {
    
    
    
    
    document.querySelector('#result_card').innerHTML='data.trip.departure,data.trip.arrival,data.trip.date,data.trip.price'
   console.log(data);
 });
})


