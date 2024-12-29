import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export interface ICitySearchStore {
  setSearchText: (text: string) => void;
  searchText: string;
}

export const useCitySearch = create<ICitySearchStore>()(
  immer((set) => ({
    searchText: "",
    setSearchText: (searchText: string) =>
      set((state) => {
        state.searchText = searchText;
      }),
  }))
);
