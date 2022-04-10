import React, {useContext, useState} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {getLocaleValue, setLanguage} from '../../preferences/Locale';
import AppContext from '../../context/AppContext';
import {RadioButton} from 'react-native-paper';
import RNRestart from 'react-native-restart';
import styles from './styles';
import {scale} from 'react-native-size-matters';
import dark from '../../preferences/Theme/dark';
import light from '../../preferences/Theme/light';
import DarkSwitch from '../../components/DarkSwitch';

const Settings = () => {
  const {isDarkMode} = useContext(AppContext);

  const [value, setValue] = useState(getLocaleValue('locale'));

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
            if (getLocaleValue('locale') != value) {
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
