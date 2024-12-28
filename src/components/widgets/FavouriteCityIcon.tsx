import { IoStar, IoStarOutline } from "react-icons/io5";
import { useFavouriteCityStore } from "../../store/favourite-cities";
import { useMemo } from "react";

const FavouriteCityIcon = ({ city }) => {
  const { favouritesCities, toggleFavouriteCityState } =
    useFavouriteCityStore();

  const isCityFavourite = useMemo(
    () => favouritesCities.find(({ title }) => title === city),
    [city, favouritesCities]
  );

  const onFavouriteToggle = () => {
    toggleFavouriteCityState(city);
  };

  return (
    <div className="cursor-pointer" onClick={onFavouriteToggle}>
      {isCityFavourite ? (
        <IoStar size={20} fill="yellow" />
      ) : (
        <IoStarOutline size={20} stroke="yellow" />
      )}
    </div>
  );
};

export default FavouriteCityIcon;
