import Card from "../../common/Card";
import LoadingStateWrapper from "../../common/LoadingStateWrapper";
import Forecast from "../Forecast/Forecast";
import BackgroundImageByWeather from "./components/BackgroundImageByWeather";
import PreviewWeatherInfo from "./components/PreviewWeatherInfo";
import { useFullWeatherInfo } from "./useFullWeatherInfo";

const FullWeatherInfo = () => {
  const { city, currentWeather, weatherForCurrentDay, isLoading } =
    useFullWeatherInfo();

  return (
    <Card className="relative h-[400px]">
      {currentWeather?.main && (
        <BackgroundImageByWeather state={currentWeather.main} />
      )}
      <LoadingStateWrapper
        isLoading={isLoading}
        isDataEnable={!!weatherForCurrentDay}
      >
        {!!weatherForCurrentDay && (
          <>
            <PreviewWeatherInfo {...weatherForCurrentDay} />
            <Forecast city={city} />
          </>
        )}
      </LoadingStateWrapper>
    </Card>
  );
};

export default FullWeatherInfo;
