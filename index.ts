/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {setLocale, getLanguage} from './src/utils/Locale';

(async () => {
  const _language = await getLanguage();
  setLocale(_language);
})();

AppRegistry.registerComponent(appName, () => App);
