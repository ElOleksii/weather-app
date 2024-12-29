import { QueryClientProvider } from "@tanstack/react-query";
import FullWeatherInfo from "./components/features/FullWeatherInfo/FullWeatherInfo";
import WeatherListByFavouriteCities from "./components/features/WeatherListByFavouriteCities";
import WeatherListBySearchHistory from "./components/features/WeatherListBySearchHistory";
import Layout from "./components/Layout/Layout";
import ThemeContextProvider from "./context/ThemeContext";
import { queryClient } from "./constants/query-client";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <Layout>
          <div className="flex gap-5">
            <div className="md:w-1/2 w-full">
              <FullWeatherInfo />
            </div>
            <div className="flex flex-col gap-y-10 md:w-1/2 w-full">
              <WeatherListBySearchHistory />
              <WeatherListByFavouriteCities />
            </div>
          </div>
        </Layout>
      </ThemeContextProvider>
    </QueryClientProvider>
  );
}
export default App;
