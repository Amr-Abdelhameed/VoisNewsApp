import React, {useContext, useState} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {getLocaleValue, setLanguage} from '../../preferences/Locale';
import AppContext from '../../context/AppContext';
import {RadioButton} from 'react-native-paper';
import RNRestart from 'react-native-restart';
import styles from './styles';
import {scale} from 'react-native-size-matters';
import * as Theme from '../../preferences/Theme';
import DarkSwitch from '../../components/DarkSwitch';

const Settings = () => {
  const {themeMode} = useContext(AppContext);

  const [value, setValue] = useState(getLocaleValue('locale'));

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text
          style={{
            ...styles.text,
            ...Theme.text(themeMode),
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
            ...Theme.btn(themeMode),
          }}
        />
      </View>
      <RadioButton.Group value={value} onValueChange={setValue}>
        <View style={styles.item}>
          <View>
            <Text style={Theme.text(themeMode)}>
              {getLocaleValue('english')}
            </Text>
            <RadioButton value="us" />
          </View>
          <View style={{marginHorizontal: scale(16)}} />
          <View>
            <Text style={Theme.text(themeMode)}>
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
          ...Theme.btn(themeMode),
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
              color: Theme.btnText(themeMode).color,
            }}>
            {getLocaleValue('changeLanguage')}
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default Settings;
