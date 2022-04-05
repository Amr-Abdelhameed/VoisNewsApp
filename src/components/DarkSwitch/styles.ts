import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  switch: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: scale(85),
    right: scale(15),
  },
});

export default styles;
