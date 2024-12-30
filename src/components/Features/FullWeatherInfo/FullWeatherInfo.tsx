import Card from "../../common/Card";
import LoadingStateWrapper from "../../common/LoadingStateWrapper";
import BackgroundImageByWeather from "./components/BackgroundImageByWeather";
import PreviewWeatherInfo from "./components/PreviewWeatherInfo";
import { useFullWeatherInfo } from "./useFullWeatherInfo";

const FullWeatherInfo = () => {
  const { currentWeather, weatherForCurrentDay, isLoading } =
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
          </>
        )}
      </LoadingStateWrapper>
    </Card>
  );
};

export default FullWeatherInfo;
