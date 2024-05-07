import axios from 'axios'

export const api = axios.create({
  openWeatherBaseURL: 'http://api.openweathermap.org/data/2.5/',
  key: '5c1ee9a81d28295642c807d65f524459',
  openMeteoBaseURL: 'https://api.open-meteo.com/v1/',
  openMeteoGeocodingBaseUrl: 'https://geocoding-api.open-meteo.com/v1/'
})