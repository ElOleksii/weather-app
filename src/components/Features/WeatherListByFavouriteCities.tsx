import { useFavouriteCityStore } from "../../store/favourite-cities";
import WeatherList from "./WeatherList";

const WeatherListByFavouriteCities = () => {
  const { favouritesCities } = useFavouriteCityStore();
  if (!favouritesCities?.length) return null;

  return <WeatherList title={"Favourites"} cities={favouritesCities} />;
};

export default WeatherListByFavouriteCities;
