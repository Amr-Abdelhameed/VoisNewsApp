import React, {useState} from 'react';
import Navigation from './src/navigation';
import {AppContext} from './src/utils/context';
import {getThemeMode, Themes} from './src/utils/Theme';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  getThemeMode().then(themeMode => {
    if (themeMode) setIsDarkMode(themeMode != Themes.light);
  });

  return (
    <AppContext.Provider value={{isDarkMode, setIsDarkMode}}>
      <Navigation />
    </AppContext.Provider>
  );
};

export default App;
