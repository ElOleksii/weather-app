import Card from "./components/Common/Card";
import WeatherBlock from "./components/Common/WeaterBlock";
import Layout from "./components/Layout/Layout";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
      <Layout>
        <Card className="w-[500px]" title={"Search History"}>
          <WeatherBlock cityName={"Odesa"} main={15} weather={"sunny"} />
          <WeatherBlock cityName={"Odesa"} main={15} weather={"sunny"} />
          <WeatherBlock cityName={"Odesa"} main={15} weather={"sunny"} />
        </Card>
      </Layout>
    </ThemeContextProvider>
  );
}
export default App;
