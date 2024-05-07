import { Container } from "./styles";

import {
  WiDaySunny,
  WiDayCloudy,
  WiCloudy,
  WiDayRainMix,
  WiDayRain,
  WiSnowflakeCold,
  WiDaySleetStorm,
  WiDaySnowWind,
  WiDayThunderstorm,
} from 'react-icons/wi'

export function LeftSide({ data, data2, city, country }) {

  let openWeatherDescription = ''
  let openMeteoIcon

  let openWeatherIcon

  const day = new Date()
  const today = day.getDate()
  const getDay = day.getDay()
  const getMonth = day.getMonth()
  const getYear = day.getFullYear()

  const dayName = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado',]
  const monName = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

  if (data) {
    const weatherIcon = data.list[0].weather[0].icon

    switch (weatherIcon) {
      case '01d':
      case '01n':
        openWeatherIcon = <WiDaySunny />
        break;
      case '02d':
      case '02n':
        openWeatherIcon = <WiDayCloudy />
        break;
      case '03d':
      case '03n':
      case '04d':
      case '04n':
        openWeatherIcon = <WiCloudy />
        break;
      case '09d':
      case '09n':
        openWeatherIcon = <WiDayRainMix />
        break;
      case '10d':
      case '10n':
        openWeatherIcon = <WiDayRain />
        break;
      case '11d':
      case '11n':
        openWeatherIcon = <WiDayThunderstorm />
        break;
      case '13d':
      case '13n':
        openWeatherIcon = <WiSnowflakeCold />
        break;
      default:
        openWeatherIcon = <WiDaySunny />
    }
  }

  if (data2) {
    const weatherCode = data2.daily.weather_code[0]

    switch (weatherCode) {
      case 0:
        openWeatherDescription = 'Céu Limpo';
        openMeteoIcon = <WiDaySunny />
        break;
      case 1:
      case 2:
      case 3:
        openWeatherDescription = 'Parcialmente nublado';
        openMeteoIcon = <WiCloudy />
        break;
      case 43:
      case 48:
        openWeatherDescription = 'Nevoeiro';
        openMeteoIcon = <WiDayRainMix />
        break;
      case 51:
      case 53:
      case 55:
      case 56:
      case 57:
        openWeatherDescription = 'Chuva leve';
        openMeteoIcon = <WiDayRain />
        break;
      case 61:
      case 63:
      case 65:
      case 66:
      case 67:
        openWeatherDescription = 'Chuva';
        openMeteoIcon = <WiDayRain />
        break;
      case 71:
      case 73:
      case 75:
      case 77:
        openWeatherDescription = 'Neve';
        openMeteoIcon = <WiSnowflakeCold />
        break;
      case 80:
      case 81:
      case 82:
        openWeatherDescription = 'Pancadas de chuva';
        openMeteoIcon = <WiDaySleetStorm />
        break;
      case 85:
      case 86:
        openWeatherDescription = 'Pancadas de neve';
        openMeteoIcon = <WiDaySnowWind />
        break;
      case 95:
        openWeatherDescription = 'Trovoada';
        openMeteoIcon = <WiDayThunderstorm />
        break;
      case 96:
      case 99:
        openWeatherDescription = 'Trovoada com granizo';
        break;
      default:
        openWeatherDescription = 'Céu Limpo'
        openMeteoIcon = <WiDaySunny />
    }
  }

  return (
    <Container>
      {
        data && (
          <div
            className="left-info"
            style={{ backgroundImage: `url('https://source.unsplash.com/1600x900/?" + ${data.city.name} city + "')` }}
          >
            <div className="pic-gradient" />
            <div className="today-info">
              <span> {dayName[getDay]} </span> <br />
              <span>{today} de {monName[getMonth]} de {getYear}</span>
              <div className="city-info">
                <i className='bx bx-current-location'></i>
                <h2>{data.city.name}, {data.city.country}</h2>
              </div>
              <div className="today-weather">
                <span>{openWeatherIcon}</span>
                <h1 className="weather-temp">
                  {parseInt(data.list[0].main.temp)}ºC
                </h1>
                <h3>{data.list[0].weather[0].description}</h3>
              </div>
            </div>
          </div>
        )
      }

      {
        data2 && (
          <div
            className="left-info"
            style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?" + city + "')" }}
          >
            <div className="pic-gradient" />
            <div className="today-info">
              <span> {dayName[getDay]} </span> <br />
              <span>{today} de {monName[getMonth]} de {getYear}</span>
              <div className="city-info">
                <i className='bx bx-current-location'></i>
                <h2>{city}, {country}</h2>
              </div>
              <div className="today-weather">
                <span>{openMeteoIcon}</span>
                <h1 className="weather-temp">
                  {parseInt(data2.daily.temperature_2m_max[0])}ºC
                </h1>
                <h3>{openWeatherDescription}</h3>
              </div>
            </div>
          </div>
        )
      }
    </Container>
  )
}