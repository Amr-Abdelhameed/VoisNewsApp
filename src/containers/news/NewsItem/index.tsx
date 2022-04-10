import React, {useContext} from 'react';
import {View, Image, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';
import AppContext from '../../../context/AppContext';
import * as Theme from '../../../preferences/Theme';

const NewsItem = ({item, onPress}) => {
  const {themeMode} = useContext(AppContext);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={{...styles.container, ...Theme.card(themeMode)}}>
        <Image
          style={styles.image}
          source={{uri: item.image_url}}
          resizeMode="stretch"
        />
        <View style={styles.textContainer}>
          <Text style={Theme.text(themeMode)}>{item.title}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NewsItem;
