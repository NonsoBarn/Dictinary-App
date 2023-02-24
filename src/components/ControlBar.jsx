import { UilBookAlt } from "@iconscout/react-unicons";
import { UilMoon } from "@iconscout/react-unicons";
import { UilSun } from "@iconscout/react-unicons";
import { useState, useEffect } from "react";

const ControlBar = () => {
  const [theme, setTheme] = useState("");
  //  Theme Dark x Light
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex justify-between">
      <div className="icon text-gray-500 flex">
        {" "}
        <UilBookAlt size={24} />
        <a href="/" className="pl-1 pt-1 font-bold text-teal-500">
          Dictionary
        </a>
      </div>
      <div className="darkmode text-gray-500">
        {theme === "dark" ? (
          <button onClick={handleThemeSwitch}>
            <UilSun size={24} />
          </button>
        ) : (
          <button onClick={handleThemeSwitch}>
            <UilMoon size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ControlBar;
