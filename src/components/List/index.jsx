import { Container } from "./styles";

import {
  WiDaySunny,
  WiDayCloudy,
  WiCloudy,
  WiDayRainMix,
  WiDayRain,
  WiDaySnow,
  WiDaySleetStorm,
  WiDaySnowWind,
  WiDayThunderstorm,
} from 'react-icons/wi'

export function List({ data, data2 }) {
  let openMeteoIcon = []
  let openWeatherIcon = []

  let timeElapsed = Date.now()
  let day = new Date(timeElapsed)
  let getDay = day.getDay()

  const dayName = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb',]

  if (data) {
    for(let i = 5; i <= 37; i++){
      switch (data.list[i].weather[0].icon) {
        case '01d':
        case '01n':
          openWeatherIcon[i] = <WiDaySunny />
          break;
        case '02d':
        case '02n':
          openWeatherIcon[i] = <WiDayCloudy />
          break;
        case '03d':
        case '03n':
        case '04d':
        case '04n':
          openWeatherIcon[i] = <WiCloudy />
          break;
        case '09d':
        case '09n':
          openWeatherIcon[i] = <WiDayRainMix />
          break;
        case '10d':
        case '10n':
          openWeatherIcon[i] = <WiDayRain />
          break;
        case '11d':
        case '11n':
          openWeatherIcon[i] = <WiDayThunderstorm />
          break;
        case '13d':
        case '13n':
          openWeatherIcon[i] = <WiSnowflakeCold />
          break;
        default:
          openWeatherIcon[i] = <WiDaySunny />
      }
    }
  }

  if (data2) {
    const weatherCode = data2.daily.weather_code

    for (let i = 0; i < 7; i++) {
      switch (weatherCode[i]) {
        case 0:
          openMeteoIcon[i] = <WiDaySunny />
          break;
        case 1:
        case 2:
        case 3:
          openMeteoIcon[i] = <WiCloudy />
          break;
        case 43:
        case 48:
          openMeteoIcon[i] = <WiDayRainMix />
          break;
        case 51:
        case 53:
        case 55:
        case 56:
        case 57:
          openMeteoIcon[i] = <WiDayRain />
          break;
        case 61:
        case 63:
        case 65:
        case 66:
        case 67:
          openMeteoIcon[i] = <WiDayRain />
          break;
        case 71:
        case 73:
        case 75:
        case 77:
          openMeteoIcon[i] = <WiDaySnow />
          break;
        case 80:
        case 81:
        case 82:
          openMeteoIcon[i] = <WiDaySleetStorm />
          break;
        case 85:
        case 86:
          openMeteoIcon[i] = <WiDaySnowWind />
          break;
        case 95:
          openMeteoIcon[i] = <WiDayThunderstorm />
          break;
        case 96:
        case 99:
          break;
        default:
          openMeteoIcon[i] = <WiDaySunny />
      }
    }
  }

  return (
    <Container>

      {
        data && (
          <ul className="days-list">
            <li>
              <span>{dayName[getDay + 1]}</span>
              <span>{openWeatherIcon[5]}</span>
              <span className="day-temp">{(parseInt(data.list[5].main.temp))}ºC</span>
            </li>
            <li>
              <span>{dayName[getDay + 2]}</span>
              <span>{openWeatherIcon[13]}</span>
              <span className="day-temp">{(parseInt(data.list[13].main.temp))}ºC</span>
            </li>
            <li>
              <span>{dayName[getDay + 3]}</span>
              <span>{openWeatherIcon[21]}</span>
              <span className="day-temp">{(parseInt(data.list[21].main.temp))}ºC</span>
            </li>
            <li>
              <span>{dayName[getDay + 4]}</span>
              <span>{openWeatherIcon[29]}</span>
              <span className="day-temp">{(parseInt(data.list[29].main.temp))}ºC</span>
            </li>
            <li>
              <span>{dayName[getDay + 5]}</span>
              <span>{openWeatherIcon[37]}</span>
              <span className="day-temp">{(parseInt(data.list[37].main.temp))}ºC</span>
            </li>
          </ul>
        )
      }

      {
        data2 && (
          <ul className="days-list">
            <li>
              <span>{dayName[getDay + 1]}</span>
              <span>{openMeteoIcon[1]}</span>
              <span className="day-temp">{(parseInt(data2.daily.temperature_2m_max[1]))}ºC</span>
            </li>
            <li>
              <span>{dayName[getDay + 2]}</span>
              <span>{openMeteoIcon[2]}</span>
              <span className="day-temp">{(parseInt(data2.daily.temperature_2m_max[2]))}ºC</span>
            </li>
            <li>
              <span>{dayName[getDay + 3]}</span>
              <span>{openMeteoIcon[3]}</span>
              <span className="day-temp">{(parseInt(data2.daily.temperature_2m_max[3]))}ºC</span>
            </li>
            <li>
              <span>{dayName[getDay + 4]}</span>
              <span>{openMeteoIcon[4]}</span>
              <span className="day-temp">{(parseInt(data2.daily.temperature_2m_max[4]))}ºC</span>
            </li>
            <li>
              <span>{dayName[getDay + 5]}</span>
              <span>{openMeteoIcon[5]}</span>
              <span className="day-temp">{(parseInt(data2.daily.temperature_2m_max[5]))}ºC</span>
            </li>
          </ul>
        )
      }

    </Container>
  )
}