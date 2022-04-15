import React, {useEffect} from 'react';
import Navigation from './navigation';
import {getTheme} from './preferences/Theme';
import {getLanguage} from './preferences/Locale';
import {useAppDispatch} from './utils/Hooks';
import {setAppTheme} from './store/theme-slice';
import {setAppLanguage} from './store/language-slice';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function getAppConfig() {
      const theme = await getTheme();
      theme && dispatch(setAppTheme(theme));

      const _language = await getLanguage();
      _language && dispatch(setAppLanguage(_language));
    }
    getAppConfig();
  }, []);

  return <Navigation />;
};

export default App;
