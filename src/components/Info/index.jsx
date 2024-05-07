import { Container } from "./styles";

export function Info({ data, data2, ...rest }) {
  return (

    <Container {...rest}>
    {
      data && (
      <div className="day-info">
        <div>
          <span className="title">PRESSÃO</span>
          <span className="pressure">{data.list[0].main.pressure}</span>
        </div>
        <div>
          <span className="title">HUMIDADE</span>
          <span className="humidity">{data.list[0].main.humidity}</span>
        </div>
        <div>
          <span className="title">VENTO</span>
          <span className="wind">{data.list[0].wind.speed} km/h</span>
        </div>
      </div>
      )
    }

    {
      data2 && (
        <div className="day-info">
        <div>
          <span className="title">PRESSÃO</span>
          <span className="pressure">{data2.current.surface_pressure}</span>
        </div>
        <div>
          <span className="title">HUMIDADE</span>
          <span className="humidity">{data2.current.relative_humidity_2m}</span>
        </div>
        <div>
          <span className="title">VENTO</span>
          <span className="wind">{data2.daily.wind_speed_10m_max[0]} km/h</span>
        </div>
      </div>
      )
    }
    </Container>
    
  )
}