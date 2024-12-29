import { useQuery } from "@tanstack/react-query";
import { fetchWeatherDataForThisDay } from "../api/weather";

const useFetchWeatherForThisDayQuery = (city: string) =>
  useQuery({
    queryKey: ["weather_for_this_day", city],
    queryFn: () => fetchWeatherDataForThisDay(city),
    enabled: !!city?.length,
    staleTime: 12000,
  });

export default useFetchWeatherForThisDayQuery;
