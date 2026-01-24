const apiKey = 'e094784946df4e7b3c46217b28dfd517';
const myLat = '52.497';
const myLong = '-1.9731';

const myURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${apiKey}&units=imperial`;

const weatherContainer = document.querySelector('#weather');

async function getWeather() {
  const response = await fetch(myURL);
  const data = await response.json();

  const townName = data.city.name;

  // Pick one forecast per day (every 8th item = 24 hours)
  const threeDays = data.list.filter((item, index) => index % 8 === 0).slice(0, 3);

  weatherContainer.innerHTML = `<h2>Weather Forecast for ${townName}</h2>`;

  threeDays.forEach(day => {
    const description = day.weather[0].description;
    const icon = day.weather[0].icon;
    const temp = day.main.temp.toFixed(1);

    const card = document.createElement('div');
    card.classList.add('weather-card');

    card.innerHTML = `
      <p><strong>${new Date(day.dt_txt).toDateString()}</strong></p>
      <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="${description}">
      <p>${description}</p>
      <p>${temp} °F</p>
    `;

    weatherContainer.appendChild(card);
  });
}

getWeather();