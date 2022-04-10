import React, {useState, useEffect, useCallback} from 'react';
import Navigation from './navigation';
import AppContext from './context/AppContext';
import {getThemeMode, Themes} from './preferences/Theme';
import {setLocale, getLanguage} from './preferences/Locale';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const appConfiguration = useCallback(function () {
    getThemeMode().then(themeMode => {
      if (themeMode) setIsDarkMode(themeMode != Themes.light);
    });

    getLanguage().then(language => {
      if (language) setLocale(language);
    });
  }, []);

  useEffect(() => {
    appConfiguration();
  }, [appConfiguration]);

  return (
    <AppContext.Provider value={{isDarkMode, setIsDarkMode}}>
      <Navigation />
    </AppContext.Provider>
  );
};

export default App;
