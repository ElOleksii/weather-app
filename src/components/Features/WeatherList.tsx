import Card from "../common/Card";
import WeatherBlock from "../common/WeaterBlock";

const WeatherList = ({ title, cities }) => {
  return (
    <Card className="w-[500px]" title={title}>
      {cities.map(({ title, id }) => (
        <WeatherBlock
          cityName={title}
          weather={"smth"}
          main={"smth"}
          key={id}
        />
      ))}
    </Card>
  );
};

export default WeatherList;
