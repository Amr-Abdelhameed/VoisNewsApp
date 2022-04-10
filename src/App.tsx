import React, {useState, useEffect, useCallback} from 'react';
import Navigation from './navigation';
import AppContext from './context/AppContext';
import {getTheme, Themes} from './preferences/Theme';
import {setLocale, getLanguage} from './preferences/Locale';

const App = () => {
  const [themeMode, setThemeMode] = useState<string>(Themes.light);

  const appConfiguration = useCallback(async function () {
    const theme = await getTheme();
    theme && setThemeMode(theme);

    const lang = await getLanguage();
    lang && setLocale(lang);
  }, []);

  useEffect(() => {
    appConfiguration();
  }, [appConfiguration]);

  return (
    <AppContext.Provider value={{themeMode, setThemeMode}}>
      <Navigation />
    </AppContext.Provider>
  );
};

export default App;
