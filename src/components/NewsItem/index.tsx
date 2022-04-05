import React, {useContext} from 'react';
import {View, Image, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';
import {AppContext} from '../../utils/context';
import dark from '../../utils/Theme/dark';
import light from '../../utils/Theme/light';

const NewsItem = ({item, onPress}) => {
  const {isDarkMode} = useContext(AppContext);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{...styles.container, ...(isDarkMode ? dark.card : light.card)}}>
        <Image
          style={styles.image}
          source={{uri: item.image_url}}
          resizeMode="stretch"
        />
        <View style={styles.textContainer}>
          <Text style={isDarkMode ? dark.text : light.text}>{item.title}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NewsItem;
