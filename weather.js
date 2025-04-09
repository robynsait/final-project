fetch("https://api.openweathermap.org/data/2.5/weather?q=Cancun&appid=58e3f8364b021f968ae0720b303c2f01&units=metric")
.then(response => response.json())
.then(data => {
    console.log(data);
    let number = data.main.temp; // The number is the normal main temp output number from the API call
    let roundedNumber = Math.round(number); // Take that number and round it
    weather.textContent = "Current Temperature: "+roundedNumber+"\u00b0C"; //Put the rounded number into the text content spot
})