import { useEffect } from "react";
import useFetchWeatherForThisDayQuery from "../../../hooks/useFetchWeatherForThisDay";
import { useCitySearch } from "../../../store/city-search";
import { useHistoryOfCitiesSearchingStore } from "../../../store/history-of-cities-search";

export const useFullWeatherInfo = () => {
  const { searchText } = useCitySearch();

  const { addHistoryOfCitySearching } = useHistoryOfCitiesSearchingStore();

  const city = searchText;

  const { data: weatherForThisDay } = useFetchWeatherForThisDayQuery(city);

  const currentWeather = weatherForThisDay?.weather?.[0];

  useEffect(() => {
    if (weatherForThisDay && searchText)
      addHistoryOfCitySearching(weatherForThisDay.name);
  }, [weatherForThisDay, searchText, addHistoryOfCitySearching]);

  console.log(currentWeather);
  return {
    city,
    currentWeather,
    weatherForThisDay,
  };
};
