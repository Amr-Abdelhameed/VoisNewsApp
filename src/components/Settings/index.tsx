import React, {useContext, useState} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {getLocaleValue} from '../../utils/Locale';
import {AppContext} from '../../utils/context';
import {RadioButton} from 'react-native-paper';
import {setLanguage} from '../../utils/Locale';
import RNRestart from 'react-native-restart';
import styles from './styles';
import {scale} from 'react-native-size-matters';
import dark from '../../utils/Theme/dark';
import light from '../../utils/Theme/light';
import DarkSwitch from '../DarkSwitch';

const Settings = () => {
  const {isDarkMode, localization} = useContext(AppContext);

  const [value, setValue] = useState(localization);

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text
          style={{
            ...styles.text,
            ...(isDarkMode ? dark.text : light.text),
          }}>
          {getLocaleValue('darkMode')}
        </Text>
        <View style={{marginHorizontal: scale(8)}} />
        <DarkSwitch />
      </View>
      <View style={{marginVertical: scale(32)}}>
        <View
          style={{
            ...styles.line,
            ...(isDarkMode ? dark.btn : light.btn),
          }}
        />
      </View>
      <RadioButton.Group value={value} onValueChange={setValue}>
        <View style={styles.item}>
          <View>
            <Text style={isDarkMode ? dark.text : light.text}>
              {getLocaleValue('english')}
            </Text>
            <RadioButton value="us" />
          </View>
          <View style={{marginHorizontal: scale(16)}} />
          <View>
            <Text style={isDarkMode ? dark.text : light.text}>
              {getLocaleValue('german')}
            </Text>
            <RadioButton value="de" />
          </View>
        </View>
      </RadioButton.Group>
      <View style={{marginVertical: scale(8)}} />
      <View
        style={{
          ...styles.button,
          ...(isDarkMode ? dark.btn : light.btn),
        }}>
        <TouchableWithoutFeedback
          onPress={() => {
            if (localization != value) {
              setLanguage(value);
              RNRestart.Restart();
            }
          }}>
          <Text
            style={{
              color: isDarkMode ? dark.btnText.color : light.btnText.color,
            }}>
            {getLocaleValue('changeLanguage')}
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default Settings;
