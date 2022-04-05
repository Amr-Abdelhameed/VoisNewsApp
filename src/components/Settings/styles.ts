import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
  },
  button: {
    padding: scale(12),
    borderRadius: scale(4),
    alignItems: 'center',
  },
});
