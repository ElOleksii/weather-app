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
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="w-full lg:w-1/2">
              <FullWeatherInfo />
            </div>
            <div className="flex flex-col gap-y-10 w-full lg:w-1/2">
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
