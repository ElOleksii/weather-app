import { parseDateToDayAndTime } from "../../../utils/data";
import WeatherStateIcon from "../../widgets/WeatherStateIcon";

const ForecastItem = ({ weather, main, dt_txt }) => {
  const parsedData = parseDateToDayAndTime(dt_txt);
  const time = parsedData?.time;
  const dayOfWeek = parsedData?.dayOfWeek;
  const formattedDate = parsedData?.formattedDate;

  const currentWeather = weather[0];

  const { temp } = main;

  return (
    <div className="w-[50px] flex flex-col items-center justify-between">
      <span>{dayOfWeek}</span>
      <span>{time}</span>
      <span>{formattedDate}</span>
      <WeatherStateIcon state={currentWeather.main} className="w-[36px]" />
      <span>{Math.floor(temp)} °C</span>
    </div>
  );
};

export default ForecastItem;
