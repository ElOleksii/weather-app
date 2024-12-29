import { nanoid } from "nanoid";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { ICityType } from "../types/city";

export interface IHistoryOfSearchingStoreType {
  historyOfCitiesSearching: ICityType[];
  addHistoryOfCitySearching: (city: string) => void;
}

export const useHistoryOfCitiesSearchingStore =
  create<IHistoryOfSearchingStoreType>()(
    immer((set) => ({
      historyOfCitiesSearching:
        JSON.parse(localStorage.getItem("city-search-history")) || [],
      addHistoryOfCitySearching: (city: string) =>
        set((state) => {
          state.historyOfCitiesSearching =
            state.historyOfCitiesSearching.filter(
              (existingCity) => existingCity.title !== city
            );
          state.historyOfCitiesSearching.unshift({ title: city, id: nanoid() });

          if (state.historyOfCitiesSearching.length > 5) {
            state.historyOfCitiesSearching.pop();
          }

          localStorage.setItem(
            "city-search-history",
            JSON.stringify(state.historyOfCitiesSearching)
          );
        }),
    }))
  );
