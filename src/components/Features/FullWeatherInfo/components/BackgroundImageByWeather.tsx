import { useEffect } from "react";
import { WeatherState } from "../../../../constants/weather-state";

const cardImagesByWeatherState = {
  [WeatherState.Clouds]: "clouds.png",
  [WeatherState.Snow]: "snow.gif",
  [WeatherState.Clear]: "shine.jpg",
  [WeatherState.Rain]: "rain.gif",
  [WeatherState.Drizzle]: "drizzle.gif",
  [WeatherState.Thunderstorm]: "thunderstorm.gif",
  [WeatherState.Atmosphere]: "atmosphere.webp",
};

const BackgroundImageByWeather = ({ state }) => {
  const url = `/weather-app/public/weather-card-background/${cardImagesByWeatherState[state]}`;
  useEffect(() => {
    console.log(cardImagesByWeatherState[state]);
    console.log(url);
  });
  return (
    <img
      className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover z-10 opacity-30 pointer-events-none rounded-lg"
      src={url}
      alt="background"
    />
  );
};

export default BackgroundImageByWeather;
