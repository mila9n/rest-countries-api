import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

const { darkTheme } = useContext(ThemeContext);

export const Theme = {
  body: darkTheme ? "black" : "white",
};
