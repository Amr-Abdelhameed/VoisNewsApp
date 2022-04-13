import React, {useContext} from 'react';
import {View, Image, Text, TouchableWithoutFeedback} from 'react-native';
import {useAppTheme} from '../../../preferences/Theme/use-app-theme';
import styles from './styles';

const NewsItem = ({item, onPress}) => {
  const {colors} = useAppTheme();

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[styles.container, {backgroundColor: colors.secondaryColor}]}>
        <Image
          style={styles.image}
          source={{uri: item.image_url}}
          resizeMode="stretch"
        />
        <View style={styles.textContainer}>
          <Text style={{color: colors.primaryColor}}>{item.title}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NewsItem;
