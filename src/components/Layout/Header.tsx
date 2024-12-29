import { FaLocationDot } from "react-icons/fa6";
import Container from "../common/Container";
import { useTheme } from "../../context/ThemeContext";
import { fetchUserCity } from "../../api/city";
import { useEffect, useState } from "react";
import { useHistoryOfCitiesSearchingStore } from "../../store/history-of-cities-search";
import { useCitySearch } from "../../store/city-search";

const ThemeSwitcher = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const handleToggle = () => {
    toggleTheme();
  };
  return (
    <div className="flex items-center space-x-4">
      <label className="relative bg-[#8aacde] dark:bg-[#657182] w-[45px] rounded-[15px] inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          onChange={handleToggle}
          checked={isDarkTheme}
        />
        <div className="w-10 h-6 bg-gray-200 rounded-full peer dark:bg-gray-600 peer-checked:bg-blue-500 peer-checked:after:translate-x-[1.3rem] after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:peer-checked:bg-blue-700"></div>
      </label>
    </div>
  );
};

const Header = () => {
  const [cityLocation, setCityLocation] = useState(null);

  const { setSearchText } = useCitySearch();

  useEffect(() => {
    const fetchCity = async () => {
      const city = await fetchUserCity();
      setCityLocation(city);
    };

    fetchCity();
  }, []);

  const { addHistoryOfCitySearching } = useHistoryOfCitiesSearchingStore();

  const handleAddCity = (city: string) => {
    setSearchText(city);
    addHistoryOfCitySearching(city);
  };

  return (
    <nav className=" bg-blue dark:bg-grey  text-white py-2 ">
      <Container className="flex items-center">
        {cityLocation && (
          <div className=" mr-[100px] flex items-center justify-center gap-2 text-lg ">
            <FaLocationDot size={24} fill="white" /> <span>{cityLocation}</span>
          </div>
        )}

        <input
          type="text"
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.currentTarget.value.trim() !== "") {
              handleAddCity(e.currentTarget.value.trim());
              e.currentTarget.value = ""; // Clear input
            }
          }}
          className="p-2 rounded-lg dark:bg-grey bg-blue  focus:outline-none border-none"
          placeholder="Search by city name"
        />
        <div className="ml-auto">
          <ThemeSwitcher />
        </div>
      </Container>
    </nav>
  );
};

export default Header;
