const town = document.querySelector('#townName');
const weatherIcon = document.querySelector('#weather-icon');
const temperature = document.querySelector('#currentTemp');

const apiKey = 'e094784946df4e7b3c46217b28dfd517';
const myLat = '52.497';
const myLong = '-1.9731';

const myURL = `//api.openweathermap.org/data/2.5/weather?q=lat${myLat},lon${myLong}&appid=${e094784946df4e7b3c46217b28dfd517}&units=imperial`;
