import { useEffect } from "react";
import FavouriteCityIcon from "../widgets/FavouriteCityIcon";
import WeatherStateIcon from "../widgets/WeatherStateIcon";

const WeatherBlock = ({ name, main, weather }) => {
  const { temp } = main;
  const currentWeather = weather?.[0];

  return (
    <div className="flex items-center justify-between relative">
      <div className="flex items-center gap-x-2">
        <FavouriteCityIcon city={name} />
        <span>{name}</span>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2">
        {<WeatherStateIcon state={currentWeather?.main} />}
      </div>
      <span>{Math.floor(temp)} °C</span>
    </div>
  );
};

export default WeatherBlock;
