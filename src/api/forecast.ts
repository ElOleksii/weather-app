import axios from "axios";
import { getEnv } from "../utils/env/env.utils";

const { weatherApiToken, weatherApiUrl } = getEnv();

export const fetchForecast = async (city: string) => {
  const response = await axios.get(`${weatherApiUrl}/forecast`, {
    params: {
      q: city,
      appid: weatherApiToken,
      units: "metric",
    },
  });
  return response.data;
};
