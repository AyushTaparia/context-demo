import { IoMoonOutline } from "react-icons/io5";
import { PiSunLight } from "react-icons/pi";
import { useThemeToggle, useThemeValue } from "./Theme";

export const Boxwidth = () => {
  const theme = useThemeValue(); // use the providers value of the useThemeValue custom hook
  const themetoggle = useThemeToggle(); // use the providers value of the useThemeToggle custom hook

  const ThemeStyle = {
    background: theme ? "rgba(36,36,36)" : "rgba(220,220,220)",
    color: theme ? "rgba(220,220,220,0.2)" : "rgba(36,36,36,0.2)",
  };

  console.log(theme);

  return (
    <div id="Outerwrapper"
      className="w-[100vw] h-[100vh] flex md:flex-row flex-col justify-center items-center"
      style={ThemeStyle}
    >
      <div id="ToggleButton1"
        className="w-full h-full flex justify-center items-center  cursor-pointer"
        onClick={() => themetoggle(false)}
      >
        <PiSunLight className="text-[12rem]" />
      </div>
      <div
        className="md:w-[8px] md:h-[60%] w-[80%] h-[8px]"
        style={{
          background: theme ? "rgba(220,220,220,.2)" : "rgba(36,36,36,.2)",
        }}
      ></div>
      <div id="ToggleButton2"
        className="w-full h-full flex justify-center items-center  cursor-pointer"
        onClick={() => themetoggle(true)}
      >
        <IoMoonOutline className="text-[10rem]" />
      </div>
    </div>
  );
};
