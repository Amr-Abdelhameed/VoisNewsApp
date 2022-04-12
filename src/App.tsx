import React, {useState, useEffect} from 'react';
import Navigation from './navigation';
import ThemeContext from './context/ThemeContext';
import {getTheme} from './preferences/Theme';
import {setLocale, getLanguage} from './preferences/Locale';
import {Themes} from './preferences/Theme/types';

const App = () => {
  const [themeMode, setThemeMode] = useState<string>(Themes.light);

  useEffect(() => {
    async function getAppConfig() {
      const theme = await getTheme();
      theme && setThemeMode(theme);

      const lang = await getLanguage();
      lang && setLocale(lang);
    }
    getAppConfig();
  }, []);

  return (
    <ThemeContext.Provider value={{themeMode, setThemeMode}}>
      <Navigation />
    </ThemeContext.Provider>
  );
};

export default App;
