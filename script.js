
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";
const getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=metric`;
  const weatherPromise  = fetch(FULL_URL);
  return weatherPromise.then((response) => {
    return response.json();
  })
}

const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  console.log(city)
  
  const data= await getWeatherData(city)
  showWeatherData(data)
}

const showWeatherData = (weatherData) => {
  console.log(weatherData)
  const curTemp = weatherData.main.temp
  const minTemp = weatherData.main.temp_min
  const maxTemp = weatherData.main.temp_max
  const cityName = weatherData.name
  document.getElementById('city-name').innerText=`${cityName}`
  document.getElementById('weather-type').innerText=weatherData.weather[0].main
  document.getElementById('temp').innerText=`${curTemp}`
  document.getElementById('min-temp').innerText=`${minTemp}`
  document.getElementById('max-temp').innerText=`${maxTemp}`
}


