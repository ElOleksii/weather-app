import { useQuery } from "@tanstack/react-query";

import { fetchForecast } from "../api/forecast";

const useFetchForecast = (city: string) =>
  useQuery({
    queryKey: ["forecast_for_next_five_days", city],
    queryFn: () => fetchForecast(city),
  });

export default useFetchForecast;
