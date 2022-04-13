import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import {getLocaleValue, setLanguage} from '../../preferences/Locale';
import {RadioButton} from 'react-native-paper';
import RNRestart from 'react-native-restart';
import styles from './styles';
import {scale} from 'react-native-size-matters';
import DarkSwitch from '../../components/DarkSwitch';
import {useAppTheme} from '../../preferences/Theme/use-app-theme';

const Settings = () => {
  const {colors} = useAppTheme();

  const [value, setValue] = useState(getLocaleValue('locale'));

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={[styles.text, {color: colors.primaryColor}]}>
          {getLocaleValue('darkMode')}
        </Text>
        <View style={{marginHorizontal: scale(8)}} />
        <DarkSwitch />
      </View>
      <View style={{marginVertical: scale(32)}}>
        <View style={[styles.line, {backgroundColor: colors.btnColor}]} />
      </View>
      <RadioButton.Group value={value} onValueChange={setValue}>
        <View style={styles.item}>
          <View>
            <Text style={{color: colors.primaryColor}}>
              {getLocaleValue('english')}
            </Text>
            <RadioButton value="us" />
          </View>
          <View style={{marginHorizontal: scale(16)}} />
          <View>
            <Text style={{color: colors.primaryColor}}>
              {getLocaleValue('german')}
            </Text>
            <RadioButton value="de" />
          </View>
        </View>
      </RadioButton.Group>
      <View style={{marginVertical: scale(8)}} />
      <View style={[styles.button, {backgroundColor: colors.btnColor}]}>
        <TouchableWithoutFeedback
          onPress={() => {
            if (getLocaleValue('locale') != value) {
              setLanguage(value);
              RNRestart.Restart();
            }
          }}>
          <Text
            style={{
              color: colors.btnTextColor,
            }}>
            {getLocaleValue('changeLanguage')}
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default Settings;
