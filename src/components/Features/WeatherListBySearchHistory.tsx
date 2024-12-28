import { useHistoryOfCitiesSearchingStore } from "../../store/city-search";

import WeatherList from "./WeatherList";

const WeatherListBySearchHistory = () => {
  const { historyOfCitiesSearching } = useHistoryOfCitiesSearchingStore();
  return (
    <WeatherList title={"Search History"} cities={historyOfCitiesSearching} />
  );
};

export default WeatherListBySearchHistory;
