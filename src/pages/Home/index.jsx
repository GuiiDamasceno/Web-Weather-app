import { Container, LeftContent, ListContent, SearchButton, ModeButton } from "./styles";
import { useEffect, useState } from 'react';

import { FiSearch } from 'react-icons/fi'

import { Button } from "../../components/Button";
import { LeftSide } from "../../components/LeftSide"
import { Info } from "../../components/Info";
import { List } from "../../components/List";
import { Input } from "../../components/Input";

import { api } from "../../services/api";

export function Home() {
  const [city, setCity] = useState('')
  const [weatherData, setWeatherData] = useState('')
  const [weatherData2, setWeatherData2] = useState('')
  const [openMeteoCityName, setOpenMeteoCityName] = useState('')
  const [openMeteoCountry, setOpenMeteoCountry] = useState('')

  // search for the user's current location
  // keys are in a .env file.
  async function getLocationInfo(latitude, longitude) {
    const url = `${api.defaults.openWeatherBaseURL}weather?lat=${latitude}&lon=${longitude}&appid=${api.defaults.key}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let CurrentCityName = data.name
        if (data) {
          setCity(CurrentCityName)
          getOpenWeatherData(CurrentCityName)
        } else {
          console.log("Reverse geolocation request failed.");
        }
      }).catch((error) => alert('Não foi possível encontrar sua localização atual.'));
  }

  function success(pos) {
    var crd = pos.coords;
    getLocationInfo(crd.latitude, crd.longitude)
  }

  function errors(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  // function to get data from the OpenWeather API
  const getOpenWeatherData = async (city) => {
    try {
      const apiWeatherURL = `${api.defaults.openWeatherBaseURL}forecast?q=${city}&units=metric&appid=${api.defaults.key}&lang=pt_br`

      const res = await fetch(apiWeatherURL)
      const data = await res.json()

      if (data.message) {
        alert('Cidade inválida. Por favor, digite o nome da cidade corretamente.')
      } else {
        setWeatherData(data)
      }
    } catch (error) {
      alert('Erro interno do servidor. Por favor atualize a página ou tente novamente mais tarde.')
    }
  }

  // function to get data from Open-Meteo API
  const getOpenMeteoWeatherData = async (city) => {
    try {
      const apiWeatherURL = `${api.defaults.openMeteoGeocodingBaseUrl}search?name=${city}&count=10&language=pt&daily=weather_code,temperature_2m_max,sunset,wind_speed_10m_max,wind_direction_10m_dominant&format=json`

      const res = await fetch(apiWeatherURL)
      const data2 = await res.json()
      setOpenMeteoCityName(data2.results[0].name)
      setOpenMeteoCountry(data2.results[0].country_code)

      if (data2.message) {
        alert('Cidade inválida. Por favor, digite o nome da cidade corretamente.')
      } else {
        const url = `${api.defaults.openMeteoBaseURL}forecast?latitude=${data2.results[0].latitude}&longitude=${data2.results[0].longitude}&current=temperature_2m,relative_humidity_2m,surface_pressure&daily=weather_code,temperature_2m_max,sunset,wind_speed_10m_max,wind_direction_10m_dominant`;
        fetch(url)
          .then((response) => response.json())
          .then((data2) => {
            if (data2) {
              setWeatherData2(data2)
            } else {
              console.log("Reverse geolocation request failed.");
            }
          })
      }
    } catch (error) {
      alert('Erro interno do servidor. Por favor atualize a página ou tente novamente mais tarde.')
    }
  }

  async function handleSearchClick() {
    setWeatherData2('')
    getOpenWeatherData(city)
  }

  async function handleOpenMeteoClick(){
    setWeatherData('')
    getOpenMeteoWeatherData(city)
  }

  useEffect(() => {
    var options = { enableHighAccuracy: true, timeout: 5000, maximumAge: 0, };
    if (navigator.geolocation) {
      navigator.permissions.query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            navigator.geolocation.getCurrentPosition(success, errors, options)
          } else if (result.state === "prompt") {
            navigator.geolocation.getCurrentPosition(success, errors, options)
          } else if (result.state === "denied") {
            alert('Por favor, permita que seu browser compartilhe sua localização atual.')
          }
        });
    } else {
      alert("Seu browser não tem suporte para localização atual. Por favor, pesquise pela cidade desejada.");
    }
  }, []);

  return (
    <Container>

      {
        weatherData ? (
          <LeftContent>
            <LeftSide data={weatherData}/>
          </LeftContent>
        )
        : (
          <LeftContent>
            <LeftSide 
              data2={weatherData2}  
              city={openMeteoCityName}
              country={openMeteoCountry}/>
          </LeftContent>
        )
      }

      <ModeButton>
        <Button
          type='button'
          title='OpenWeather'
          onClick={handleSearchClick}
        />
        <Button
          type='button'
          title='OpenMeteo'
          onClick={handleOpenMeteoClick}
        />
      </ModeButton>

      {weatherData ? (<Info data={weatherData}/>) : <Info data2={weatherData2}/>}

      <ListContent>
        {weatherData ? (<List data={weatherData}/>) : (<List data2={weatherData2}/>)}
      </ListContent>

      <Input
        type='text'
        placeholder='Pesquisar por cidade'
        icon={FiSearch}
        onChange={(e) => setCity(e.target.value)}
      />

      <SearchButton>
        <Button
          type='button'
          title="Buscar"
          onClick={handleSearchClick}
        />
      </SearchButton>

    </Container >
  )
}