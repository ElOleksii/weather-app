import { useEffect } from "react";
import useFetchWeatherForThisDayQuery from "../../../hooks/useFetchWeatherForThisDay";
import { useCitySearch } from "../../../store/city-search";
import { useHistoryOfCitiesSearchingStore } from "../../../store/history-of-cities-search";
import { useCityByGeolocation } from "../../../context/CityByGeolocationContext";

export const useFullWeatherInfo = () => {
  const { searchText } = useCitySearch();
  const { addHistoryOfCitySearching } = useHistoryOfCitiesSearchingStore();

  const { isLoading: isCityByLocationLoading, cityByGeoLocation } =
    useCityByGeolocation();

  const city = searchText?.length ? searchText : cityByGeoLocation ?? "";

  const { data: weatherForCurrentDay, isLoading: isCityLoading } =
    useFetchWeatherForThisDayQuery(city);

  const isLoading =
    (isCityLoading && !weatherForCurrentDay) ||
    (isCityByLocationLoading && !weatherForCurrentDay);

  const currentWeather = weatherForCurrentDay?.weather?.[0];

  useEffect(() => {
    if (weatherForCurrentDay && searchText)
      addHistoryOfCitySearching(weatherForCurrentDay.name);
  }, [weatherForCurrentDay, searchText, addHistoryOfCitySearching]);

  return {
    city,
    currentWeather,
    weatherForCurrentDay,
    isLoading,
  };
};
