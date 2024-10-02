import { useContext } from "react";
import ThemeContext from "./themeContext";
import LanguageContext from "./languageContext";

export const Navbar = () => {
  // get theme and lanauge contexts here
  const theme = useContext(ThemeContext);
  const { language } = useContext(LanguageContext)
  console.log("theme: ", theme);

  const changeTheme = (e) => {
    theme.setTheme(theme.theme === "light" ? 'dark' : 'light');
  }

  return (
    <div className="navbar">
      <span>Dialecto</span>
      <div className="right">
        {/* add eventListerner to it also change the content of the button based on the theme */}
        <button onClick={changeTheme}>{theme.theme === 'light' ? "dark theme" : "light theme"}</button>
        <span>{/* Show active language here */language}</span>
      </div>
    </div>
  );
};
