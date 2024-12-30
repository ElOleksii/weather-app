import Card from "../common/Card";
import WeatherBlock from "../common/WeatherBlock";
import FetchWeatherWrapper from "../widgets/FetchWeatherWrapper";

const WeatherList = ({ title, cities }) => {
  return (
    <Card title={title}>
      {cities.map(({ title, id }) => (
        <FetchWeatherWrapper Component={WeatherBlock} city={title} key={id} />
      ))}
    </Card>
  );
};

export default WeatherList;
