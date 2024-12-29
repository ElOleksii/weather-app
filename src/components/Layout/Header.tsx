import { FaLocationDot } from "react-icons/fa6";
import Container from "../common/Container";
import { useTheme } from "../../context/ThemeContext";
import { fetchUserCity } from "../../api/city";
import { useEffect, useState } from "react";
import { useHistoryOfCitiesSearchingStore } from "../../store/history-of-cities-search";
import { useCitySearch } from "../../store/city-search";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";

const ThemeSwitcher = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const handleToggle = () => {
    toggleTheme();
  };
  return (
    <>
      <div className="md:flex items-center space-x-4 hidden">
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

      <div className="bg-yellow-100 dark:bg-blue-900 md:hidden ">
        <button onClick={() => handleToggle()}>
          {isDarkTheme && <IoSunny size={25} />}
          {!isDarkTheme && <IoMoon size={25} />}
        </button>
      </div>
    </>
  );
};

const CityLocation = () => {
  const [cityLocation, setCityLocation] = useState(null);

  useEffect(() => {
    const fetchCity = async () => {
      const city = await fetchUserCity();
      setCityLocation(city);
    };

    fetchCity();
  }, []);

  return (
    cityLocation && (
      <div className="mr-[100px] hidden md:flex items-center justify-center gap-2 text-lg ">
        <FaLocationDot size={24} fill="white" /> <span>{cityLocation}</span>
      </div>
    )
  );
};

const Header = () => {
  const { setSearchText } = useCitySearch();

  const { addHistoryOfCitySearching } = useHistoryOfCitiesSearchingStore();

  const handleAddCity = (city: string) => {
    setSearchText(city);
    addHistoryOfCitySearching(city);
  };

  return (
    <nav className=" bg-blue dark:bg-grey  text-white py-2 ">
      <Container className="flex items-center">
        <CityLocation />

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
