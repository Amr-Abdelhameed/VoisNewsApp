import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import LottieView from 'lottie-react-native';
import {myNavigation} from '../../utils/constants';

const Splash = ({navigation}) => {
  const [animationLoaded, setAnimationLoaded] = useState(false);

  useEffect(() => {
    if (animationLoaded)
      navigation.reset({
        index: 0,
        routes: [{name: myNavigation.main.stack}],
      });
  }, [animationLoaded]);

  const onAnimationFinish = () => setAnimationLoaded(true);

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/lottiefiles/splash.json')}
        autoPlay
        loop={false}
        onAnimationFinish={onAnimationFinish}
      />
    </View>
  );
};

export default Splash;
