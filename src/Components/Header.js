import { ContainerStyle } from "./style/Container.styled";
import { Moon } from "phosphor-react";
import { HeaderStyle } from "./style/Header.styled";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const Header = () => {
  const { setDarkTheme } = useContext(ThemeContext);

  const handleClick = () => {
    setDarkTheme((prev) => (prev === false ? true : false));
  };

  return (
    <HeaderStyle>
      <ContainerStyle>
        <div className="nav">
          <h2>Where in the world?</h2>
          <span onClick={handleClick}>
            <Moon size={18} />
            <span className="text">Dark mode</span>
          </span>
        </div>
      </ContainerStyle>
    </HeaderStyle>
  );
};

export default Header;
