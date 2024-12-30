import axios from "axios";
import { getEnv } from "../utils/env/env.utils";
import { IWeatherResponse } from "../types/responses";

const { weatherApiToken, weatherApiUrl } = getEnv();

export const fetchForecast = async (city: string) => {
  const response = await axios.get<IWeatherResponse>(
    `${weatherApiUrl}/forecast`,
    {
      params: {
        q: city,
        appid: weatherApiToken,
        units: "metric",
      },
    }
  );
  return response.data;
};
