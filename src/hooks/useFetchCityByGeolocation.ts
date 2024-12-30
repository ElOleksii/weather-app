import { useQuery } from "@tanstack/react-query";

import { fetchCityByUserGeolocation } from "../api/city";

const useFetchCityByGeoLocation = (coords: GeolocationCoordinates | null) =>
  useQuery({
    queryKey: ["city_by_geo_location", coords],
    queryFn: () => coords && fetchCityByUserGeolocation(coords),
    enabled: !!coords,
  });

export default useFetchCityByGeoLocation;
