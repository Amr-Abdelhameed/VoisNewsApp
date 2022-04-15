import React, {useState, useEffect} from 'react';
import Navigation from './navigation';
import ThemeContext from './store/theme-context';
import LanguageContext from './store/language-context';
import {getTheme} from './preferences/Theme';
import {getLanguage} from './preferences/Locale';
import {Themes} from './preferences/Theme/themes';
import {Languages} from './preferences/Locale/languages';

const App = () => {
  const [appTheme, setAppTheme] = useState<string>(Themes.light);
  const [appLanguage, setAppLanguage] = useState<string>(Languages.en);

  useEffect(() => {
    async function getAppConfig() {
      const theme = await getTheme();
      theme && setAppTheme(theme);

      const _language = await getLanguage();
      _language && setAppLanguage(_language);
    }
    getAppConfig();
  }, []);

  return (
    <LanguageContext.Provider value={{appLanguage, setAppLanguage}}>
      <ThemeContext.Provider value={{appTheme, setAppTheme}}>
        <Navigation />
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
};

export default App;
