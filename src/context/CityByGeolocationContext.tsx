import useFetchCityByGeoLocation from "../hooks/useFetchCityByGeolocation";
import { createContext, useContext, useEffect, useState } from "react";

interface CityByGeolocationContextType {
  cityByGeoLocation: null | string;
  isLoading: boolean;
}

export const CityByGeolocationContext =
  createContext<CityByGeolocationContextType>({
    cityByGeoLocation: null,
    isLoading: false,
  });

export const useCityByGeolocation = () => {
  return useContext(CityByGeolocationContext);
};

export const useCityByGeolocationProvider = () => {
  const [isCurrentPositionLoading, setIsCurrentPositionLoading] =
    useState(true);
  const [coords, setCoords] = useState<null | GeolocationCoordinates>(null);

  const { data, isLoading: isCityLoading } = useFetchCityByGeoLocation(coords);

  const cityByGeoLocation = data?.city ?? null;

  const isLoading = isCityLoading || isCurrentPositionLoading;

  useEffect(() => {
    if (!navigator.geolocation) {
      setIsCurrentPositionLoading(false);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        setIsCurrentPositionLoading(false);
        setCoords(position.coords);
      },
      () => {
        setIsCurrentPositionLoading(false);
      }
    );
  }, []);

  return { isLoading, cityByGeoLocation };
};
interface ICityByGeolocationProviderProps {
  children: React.ReactNode;
}

export const CityByGeolocationProvider: React.FC<
  ICityByGeolocationProviderProps
> = ({ children }) => {
  const value = useCityByGeolocationProvider();
  return (
    <CityByGeolocationContext.Provider value={value}>
      {children}
    </CityByGeolocationContext.Provider>
  );
};

export default CityByGeolocationProvider;
