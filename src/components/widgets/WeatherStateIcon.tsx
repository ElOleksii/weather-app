import { WeatherState } from "../../constants/weather-state";

const skyImagesByState = {
  [WeatherState.Clear]: "clear.png",
  [WeatherState.Clouds]: "clouds.png",
  [WeatherState.Snow]: "snow.png",
  [WeatherState.Rain]: "rain.png",
  [WeatherState.Drizzle]: "drizzle.png",
  [WeatherState.Thunderstorm]: "thunderstorm.png",
  [WeatherState.Atmosphere]: "atmosphere.png",
};

const WeatherStateIcon = ({ state, className = "" }) => {
  const url = `${import.meta.env.BASE_URL}weather-state-icons/${
    skyImagesByState[state] ?? skyImagesByState[WeatherState.Atmosphere]
  }`;

  return (
    <div className={`${className}`}>
      <img src={url} className="w-full" alt="Sky state" />
    </div>
  );
};

export default WeatherStateIcon;
