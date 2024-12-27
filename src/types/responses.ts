import { WeatherState } from "../constants/weather-state";

interface IMain {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

interface IWind {
  deg: number;
  gust: number;
  speed: number;
}

interface IWeather {
  id: number;
  main: WeatherState;
  description: string;
  icon: string;
}

export interface IWeatherResponse {
  coord: {
    lon: number;
    lat: number;
  };
  weather: IWeather[];
  base: string;
  main: IMain;
  visibility: number;
  wind: IWind;
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    message?: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
