import axios from "axios";
import { getEnv } from "../utils/env/env.utils";

const { geolocationApiUrl } = getEnv();

export const fetchCityByUserGeolocation = async ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) => {
  try {
    const response = await axios.get<{ city: string }>(`${geolocationApiUrl}`, {
      params: {
        latitude,
        longitude,
        localityLanguage: "en",
      },
    });
    console.log("latitude: ", latitude);
    console.log("longitude: ", longitude);
    return response.data.city;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchUserCity = async () => {
  try {
    const position = await new Promise<GeolocationPosition>(
      (resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      }
    );

    const city = await fetchCityByUserGeolocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });

    return city;
  } catch (error) {
    console.error(error);
    return null;
  }
};
