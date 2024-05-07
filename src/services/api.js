import axios from 'axios'

export const api = axios.create({
  openWeatherBaseURL: 'https://api.openweathermap.org/data/2.5/',
  key: process.env.SECRET_KEY,
  openMeteoBaseURL: 'https://api.open-meteo.com/v1/',
  openMeteoGeocodingBaseUrl: 'https://geocoding-api.open-meteo.com/v1/'
})