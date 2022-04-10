import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: scale(200),
  },
  textContainer: {
    marginHorizontal: scale(8),
  },
  text: {
    marginTop: scale(8),
  },
  hyberLink: {
    color: 'blue',
    marginTop: scale(8),
  },
  error: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  button: {
    width: '30%',
    alignSelf: 'center',
    padding: scale(12),
    borderRadius: scale(4),
    alignItems: 'center',
  },
});

export default styles;
