import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

interface ThemeContextType {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

interface IProps {
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeContextProvider = ({ children }: IProps) => {
  const [isDarkTheme, setDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem("isDarkTheme");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    localStorage.setItem("isDarkTheme", JSON.stringify(isDarkTheme));
    document.body.classList.toggle("dark", isDarkTheme);
  }, [isDarkTheme]);

  const toggleTheme = useCallback(() => {
    setDarkTheme((prev) => !prev);
  }, []);

  const value = {
    isDarkTheme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error("Context must be used within a context provider");
  }
  return context;
};
