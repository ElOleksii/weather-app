const WeatherBlock = ({ cityName, main, weather }) => {
  return (
    <div className="flex items-center justify-between">
      <span className="">{cityName}</span>
      <span>{weather}</span>
      <span className="">{main}</span>
    </div>
  );
};

export default WeatherBlock;
