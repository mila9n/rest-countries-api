import React from "react";
import { GlobalStyle } from "./Components/style/GlobalStyle";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "./Context/ThemeContext";
import Header from "./Components/Header";
import Countries from "./Components/Countries";
import Detail from "./Components/Detail";

function App() {
  const [darkTheme, setDarkTheme] = React.useState(false);

  const theme = {
    color: {
      body: darkTheme ? "#202d36" : "#fff",
      components: darkTheme ? "#2b3743" : "#fff",
      boxshadow: darkTheme ? "#212020" : "lightgray",
      text1: darkTheme ? "#fff" : "#000",
      text2: darkTheme ? "rgba(255, 255, 255,0.6)" : "gray",
    },
  };

  return (
    <>
      <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
        <ThemeProvider theme={theme}>
          <Router>
            <GlobalStyle />
            <Header />
            <Routes>
              <Route path="/" element={<Countries />} />
              <Route path="/:CountryName" element={<Detail />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
