import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: scale(200),
    marginTop: scale(12),
    borderRadius: scale(16),
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: '75%',
  },

  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: scale(8),
  },
});

export default styles;
