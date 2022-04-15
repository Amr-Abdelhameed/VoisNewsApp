import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {setLanguage} from '../../preferences/Locale';
import {RadioButton} from 'react-native-paper';
import styles from './styles';
import {scale} from 'react-native-size-matters';
import DarkSwitch from '../../components/DarkSwitch';
import {setAppLanguage} from '../../store/language-slice';
import {useAppTheme} from '../../preferences/Theme/use-app-theme';
import {useAppLanguage} from '../../preferences/Locale/use-app-language';
import {useAppDispatch} from '../../utils/Hooks';

const Settings = () => {
  const {colors} = useAppTheme();
  const {strings} = useAppLanguage();

  const dispatch = useAppDispatch();

  const [value, setValue] = useState(strings.language);

  useEffect(() => {
    setLanguage(value);
    dispatch(setAppLanguage(value));
  }, [value]);

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={[styles.text, {color: colors.primaryColor}]}>
          {strings.darkMode}
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
            <Text style={{color: colors.primaryColor}}>{strings.english}</Text>
            <RadioButton value="en" />
          </View>
          <View style={{marginHorizontal: scale(16)}} />
          <View>
            <Text style={{color: colors.primaryColor}}>{strings.german}</Text>
            <RadioButton value="de" />
          </View>
        </View>
      </RadioButton.Group>
    </View>
  );
};

export default Settings;
