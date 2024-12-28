import FavouriteCityIcon from "../widgets/FavouriteCityIcon";

const WeatherBlock = ({ cityName, main, weather }) => {
  return (
    <div className="flex items-center justify-between relative">
      <div className="flex items-center gap-x-2">
        <FavouriteCityIcon city={cityName} />
        <span>{cityName}</span>
      </div>
      <span className="absolute left-1/2 transform -translate-x-1/2">
        {weather}
      </span>
      <span>{main}</span>
    </div>
  );
};

export default WeatherBlock;
