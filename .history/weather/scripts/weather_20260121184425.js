const town = document.querySelector('#townName');
const weatherIcon = document.querySelector('#weather-icon');
const temperature = document.querySelector('#currentTemp');

const apiKey = 'e094784946df4e7b3c46217b28dfd517';
const myLat = '52.497';
const myLong = '-1.9731';
const myURL = `https://api.openweathermap.org/data/2.5/weather?q=&lat${myLat}&lon${myLong}&appid=${apiKey}&units=imperial`;

async function apiFetch() {
    try {
        const response = await fetch(myURL);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    }catch (error) {
        console.log(error);
    }
}
apiFetch();
function displayResults(weatherData) {
     console.log(weatherData);
     hello

}
