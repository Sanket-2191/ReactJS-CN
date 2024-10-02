import { createContext, useContext, useState } from "react";
import "./styles.css";
// import { Navbar } from "./Navbar";
// import { Home } from "./Home";
export const languageContext = createContext();

// debug the below custom hook
export const useLanguageValue = () => {
  const value = useContext(languageContext);
  return value;
};

// debug the below context Provider
export const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("English");

  return (
    <languageContext.Provider
      value={{ language, setLanguage }}
    >{children}
    </languageContext.Provider>
  );
};

export const themeContext = createContext();

// debug the below custom hook
export const useThemeValue = () => {
  const value = useContext(themeContext);
  return value;
};
// debug the below context Provider
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <themeContext.Provider value={{ theme, setTheme }}>{children}</themeContext.Provider>
  );
};



const content = {
  English:
    "The cat sat lazily on the windowsill, basking in the warm sunshine and occasionally twitching its tail.",
  Hindi:
    "बिल्ली खिड़की पर आलस्य से बैठी थी, गर्म धूप का आनंद ले रही थी और कभी-कभी अपनी पूंछ को हिलाती थी।",
  Marathi:
    "मांजर खिडकीवर आळशीपणे बसली, उबदार सूर्यप्रकाशात बासिंग करत आणि अधूनमधून तिची शेपटी वळवत."
};

export const Home = () => {
  const { language, setLanguage } = useLanguageValue();

  return (
    <div>
      <div className="language-container">
        <span onClick={() => setLanguage("English")}>English</span>
        <span onClick={() => setLanguage("Hindi")}>Hindi</span>
        <span onClick={() => setLanguage("Marathi")}>Marathi</span>
      </div>
      <p>{content[language]}</p>
    </div>
  );
};

const Navbar = () => {
  const { theme, setTheme } = useThemeValue();
  const { language } = useLanguageValue();

  const changeTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="navbar">
      <span>Dialecto</span>
      <div className="right">
        <button onClick={changeTheme}>
          {theme === "light" ? "Dark" : "Light"} Theme
        </button>
        <span>{language}</span>
      </div>
    </div>
  );
};

function App() {
  const { theme } = useThemeValue();

  return (
    <div className={`App ${theme}`}>
      <Navbar />
      <Home />
    </div>
  );
}
const AppRoot = () => (<ThemeContextProvider>
  <LanguageContextProvider>
    <App />
  </LanguageContextProvider>
</ThemeContextProvider>
);

export default AppRoot;




// for POSTKEEPER ..............
// import "./styles.css";
// import { Navbar } from "./Navbar";
// import { List } from "./List";
// import { PostContextProvider } from "./postContext";

//  default function App() {
//   return (
//     <div className="App">
//       <PostContextProvider>
//         <Navbar />
//         <List />
//       </PostContextProvider>
//     </div>
//   );
// }
