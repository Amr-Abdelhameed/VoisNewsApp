import React, {useState, useEffect, useCallback} from 'react';
import Navigation from './src/navigation';
import {AppContext} from './src/utils/context';
import {getThemeMode, Themes} from './src/utils/Theme';
import {setLocale, getLanguage} from './src/utils/Locale';
import {myLocalization} from './src/utils/constants';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [localization, setLocalization] = useState<string>(
    myLocalization.defaultLocale,
  );

  const appContextObj = {
    isDarkMode,
    setIsDarkMode,
    localization,
    setLocalization,
  };

  const appConfiguration = useCallback(function () {
    getThemeMode().then(themeMode => {
      if (themeMode) {
        setIsDarkMode(themeMode != Themes.light);
      }
    });

    getLanguage().then(language => {
      if (language) {
        setLocale(language);
        setLocalization(language);
      }
    });
  }, []);

  useEffect(() => {
    appConfiguration();
  }, [appConfiguration]);

  return (
    <AppContext.Provider value={appContextObj}>
      <Navigation />
    </AppContext.Provider>
  );
};

export default App;
