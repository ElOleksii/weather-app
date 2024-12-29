import Card from "../../common/Card";
import BackgroundImageByWeather from "./components/BackgroundImageByWeather";
import PreviewWeatherInfo from "./components/PreviewWeatherInfo";
import { useFullWeatherInfo } from "./useFullWeatherInfo";

const FullWeatherInfo = () => {
  const { currentWeather, weatherForThisDay } = useFullWeatherInfo();
  return (
    <Card className="relative h-[400px]">
      {currentWeather?.main && (
        <BackgroundImageByWeather state={currentWeather.main} />
      )}
      <PreviewWeatherInfo {...weatherForThisDay} />
    </Card>
  );
};

export default FullWeatherInfo;
