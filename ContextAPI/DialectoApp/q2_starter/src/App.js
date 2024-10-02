import "./styles.css";
import { useState } from "react";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import LanguageContext from "./languageContext";
import ThemeContext from "./themeContext";

// get theme and language contexts here

export default function App() {

  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("English");

  return (
    <>
      <LanguageContext.Provider value={{ language, setLanguage }} >
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <div className={`App ${theme}`}>
            {/* Add context provider here */}
            <Navbar />
            <Home />
          </div>
        </ThemeContext.Provider>
      </LanguageContext.Provider>
    </>

  );
}
