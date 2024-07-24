# Weather Website

Modelo de Website de previsão do tempo simples usando React e duas APIs [OpenWeatherMap](https://openweathermap.org/) e [Open-Meteo](https://open-meteo.com/)
</br>



<p align="center">
<img src="https://github.com/GuiiDamasceno/Web-Weather-app/blob/main/assets/OpenMeteoImage.png" width="50%"></img> 
<img src="https://github.com/GuiiDamasceno/Web-Weather-app/blob/main/assets/OpenWeatherImage.png" width="50%"></img> 
</p>

##  Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- ViteJS;
- JavaScript;
- ReactJS.

## API Docs   
> [!IMPORTANT] 
> Este projeto usou **_versão 2.5_** de OpenWeatherMap API e **_versão 1.0_** de Open-Meteo</br>
> **API used in this project**:</br>

#### OpenWeatherMap API:
> - [Current Weather API Docs](https://openweathermap.org/current#one)</br>
> - [Geocoding API Docs](https://openweathermap.org/api/geocoding-api)</br>

#### Open-Meteo API:
> - [Daily Weather Forecast API Docs](https://open-meteo.com/en/docs)</br>
> - [Geocoding API Docs](https://open-meteo.com/en/docs/geocoding-api)</br>

## Funcionalidades      
- Adquire a localização do usuário automaticamente.
- Caixa de pesquisa para cidades
- Informações do tempo diárias
- 5 dias futuros de previsão do tempo.

## Como Executar
1. Crie uma conta em [OpenWeatherMap](https://openweathermap.org/).
2. Depois pegue sua key em https://home.openweathermap.org/api_keys.
   >Para testar se sua key está funcionando, copie e cole o link a seguir em seu navegador.</br>
   >https://api.openweathermap.org/data/2.5/weather?lat=53.4794892&lon=-2.2451148&units=metric&appid=YOUR_API_KEY</br>
   >Substitua `YOUR_API_KEY` com sua API key de OpenWeatherMap
3. Clone o repo
   ```sh
   https://github.com/GuiiDamasceno/Web-Weather-app.git
   ```
4. Navegue até **services/api** e substitua a variável 'key' por sua API key.
   ```dart
   key = 'Paste Your API Key Here';
   ```
5. Rode o app

## 
  <p align="center">
    Desenvolvido por: Guilherme Damasceno
  </p>
