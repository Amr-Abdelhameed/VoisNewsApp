import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import styles from './styles';
import LottieView from 'lottie-react-native';
import {routes} from '../../utils/constants';

const Splash = ({navigation}) => {
  const onAnimationFinish = () =>
    navigation.reset({
      index: 0,
      routes: [{name: routes.main.stack}],
    });

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
