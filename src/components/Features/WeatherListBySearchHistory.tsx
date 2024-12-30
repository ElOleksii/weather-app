import { useHistoryOfCitiesSearchingStore } from "../../store/history-of-cities-search";

import WeatherList from "./WeatherList";

const WeatherListBySearchHistory = () => {
  const { historyOfCitiesSearching } = useHistoryOfCitiesSearchingStore();
  if (!historyOfCitiesSearching?.length) return null;
  return (
    <WeatherList title={"Search History"} cities={historyOfCitiesSearching} />
  );
};

export default WeatherListBySearchHistory;
