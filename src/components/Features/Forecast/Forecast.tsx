import { memo } from "react";
import useFetchForecast from "../../../hooks/useForecastByCity";
import LoadingStateWrapper from "../../common/LoadingStateWrapper";
import ForecastItem from "./ForecastItem";
import ScrollByArrows from "../../common/ScrollByArrows/ScrollByArrows";

interface IForecastListProps {
  city: string;
}

const Forecast: React.FC<IForecastListProps> = memo(({ city }) => {
  const { data: forecastForNextFiveDays, isFetched } = useFetchForecast(city);

  const isLoading = !isFetched && !forecastForNextFiveDays;

  return (
    <LoadingStateWrapper
      isLoading={isLoading}
      isDataEnable={!!forecastForNextFiveDays}
    >
      <ScrollByArrows>
        {forecastForNextFiveDays?.list?.map((forecast) => (
          <ForecastItem
            key={forecast.dt}
            weather={forecast.weather}
            main={forecast.main}
            dt_txt={forecast.dt_txt}
          />
        ))}
      </ScrollByArrows>
    </LoadingStateWrapper>
  );
});

export default Forecast;
