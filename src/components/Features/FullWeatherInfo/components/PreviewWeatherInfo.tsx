import FavouriteCityIcon from "../../../widgets/FavouriteCityIcon";
import WeatherStateIcon from "../../../widgets/WeatherStateIcon";

const PreviewWeatherInfo = ({ name, main, weather, wind }) => {
  const currentWeather = weather?.[0];
  const { humidity, temp } = main;
  const { speed } = wind;

  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <div className="flex gap-x-2 text-3xl items-center">
          {name}
          <FavouriteCityIcon city={name} />
        </div>
        <span>{Math.floor(temp)} °C</span>
        <div className="flex gap-x-2">
          <span>{humidity}%</span>
          <span>{speed} mph</span>
        </div>
      </div>
      <WeatherStateIcon
        className="w-[100px] z-50"
        state={currentWeather.main}
      />
    </div>
  );
};

export default PreviewWeatherInfo;
