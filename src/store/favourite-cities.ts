import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { nanoid } from "nanoid";
import { ICityType } from "../types/city";

export interface IFavouriteCityStoreType {
  favouritesCities: ICityType[];
  toggleFavouriteCityState: (city: string) => void;
}

export const useFavouriteCityStore = create<IFavouriteCityStoreType>()(
  immer((set) => ({
    favouritesCities: JSON.parse(
      localStorage.getItem("favourites-cities") || "[]"
    ),
    toggleFavouriteCityState: (newCity: string) =>
      set((state) => {
        const isCityFavourite = state.favouritesCities.find(
          ({ title }) => title === newCity
        );

        if (isCityFavourite) {
          state.favouritesCities = state.favouritesCities.filter(
            ({ title }) => title !== newCity
          );
        } else {
          state.favouritesCities.unshift({ title: newCity, id: nanoid() });
        }

        // Update localStorage with the new favourites array
        localStorage.setItem(
          "favourites-cities",
          JSON.stringify(state.favouritesCities)
        );
      }),
  }))
);
