import { IEnv } from "./env.type";

export const mapEnv = () => {
  const parsed: IEnv = {
    weatherApiToken: import.meta.env.VITE_WEATHER_API_TOKEN,
    weatherApiUrl: import.meta.env.VITE_WEATHER_API_URL,
    geolocationApiUrl: import.meta.env.VITE_GEOLOCATION_API_URL,
  };

  return parsed;
};

let env: IEnv;

export const getEnv = () => {
  if (!env) {
    env = mapEnv();
  }
  return env;
};
