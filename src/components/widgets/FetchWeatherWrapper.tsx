import useFetchWeatherForThisDayQuery from "../../hooks/useFetchWeatherForThisDay";

const FetchWeatherWrapper = ({ city, Component }) => {
  const { data: weatherForThisDay } = useFetchWeatherForThisDayQuery(city);
  return <div>{weatherForThisDay && <Component {...weatherForThisDay} />}</div>;
};

export default FetchWeatherWrapper;
