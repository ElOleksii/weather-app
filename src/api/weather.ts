import axios from "axios";
import { IWeatherResponse } from "../types/responses";
import { getEnv } from "../utils/env/env.utils";

const { weatherApiToken, weatherApiUrl } = getEnv();

export const fetchWeatherDataForThisDay = async (city: string) => {
  try {
    const response = await axios.get(`${weatherApiUrl}/weather`, {
      params: {
        q: city,
        appid: weatherApiToken,
        units: "metric",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching weather:", error);
    throw error;
  }
};
