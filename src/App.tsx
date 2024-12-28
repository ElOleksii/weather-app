import Card from "./components/common/Card";
import WeatherBlock from "./components/common/WeaterBlock";
import WeatherListByFavouriteCities from "./components/features/WeatherListByFavouriteCities";
import WeatherListBySearchHistory from "./components/features/WeatherListBySearchHistory";
import Layout from "./components/Layout/Layout";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
      <Layout>
        <div className="flex flex-col gap-y-10">
          <WeatherListBySearchHistory />
          <WeatherListByFavouriteCities />
        </div>
      </Layout>
    </ThemeContextProvider>
  );
}
export default App;
