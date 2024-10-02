import { LuSun } from "react-icons/lu";
import { FiMoon } from "react-icons/fi";
import { useEffect, useState } from "react";

function ThemeController() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark");
      document.documentElement.setAttribute("data-theme", storedTheme);
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  const handleThemeToggle = () => {
    const newTheme = !isDarkMode ? "dark" : "light";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <button
      className="bg-gray-600 rounded-full p-2 transition duration-300 flex items-center justify-center transform hover:-rotate-90"
      onClick={handleThemeToggle}
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <FiMoon className="h-6 w-6 text-secondary-color transition-transform duration-500" />
      ) : (
        <LuSun className="h-6 w-6 text-yellow-500 transition-transform duration-500 " />
      )}
    </button>
  );
}

export default ThemeController;
