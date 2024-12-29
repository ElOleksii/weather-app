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
  const url = `/weather-app/public/weather-state-icons/${skyImagesByState[state]}`;

  return (
    <div className={`w-[36px] ${className}`}>
      <img src={url} className="w-full" alt="Sky state" />
    </div>
  );
};

export default WeatherStateIcon;
