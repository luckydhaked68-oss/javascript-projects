const apiKey = '3b0b9395572cebc288dcb9730ad3436e'
const city = "jaipur"

 async function fetchWeatherdata(){
const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}');

const data = await response.json();
console.log(data);
}

fetchWeatherdata();