import React, {useContext, useEffect, useState} from 'react';
import {
  Image,
  Text,
  View,
  Linking,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Share,
} from 'react-native';
import styles from './styles';
import {getLocaleValue} from '../../../preferences/Locale';
import {useGetArticleById} from './NewsDetailsRepository';
import AppContext from '../../../context/AppContext';
import dark from '../../../preferences/Theme/dark';
import light from '../../../preferences/Theme/light';
import {buildShortLink} from '../../../utils/Firebase';
import {scale} from 'react-native-size-matters';

const NewsDetails = ({route}) => {
  const {uuid} = route.params;

  const {isDarkMode} = useContext(AppContext);

  const [dynamicLink, setDynamicLink] = useState('');

  const [response, loading, error, _] = useGetArticleById(uuid);

  useEffect(() => {
    async function buildDynamicLink() {
      const _link = await buildShortLink(uuid);
      setDynamicLink(_link);
    }
    buildDynamicLink();
  }, []);

  const onShare = async () => {
    await Share.share({message: dynamicLink});
  };

  return (
    <>
      {loading && <ActivityIndicator />}
      {response && (
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{uri: response.image_url}}
            resizeMode="stretch"
          />
          <View style={styles.textContainer}>
            <Text
              style={{
                ...styles.text,
                ...(isDarkMode ? dark.text : light.text),
              }}>
              {response.title}
            </Text>
            <Text
              style={{
                ...styles.text,
                ...(isDarkMode ? dark.text : light.text),
              }}>
              {response.description}
            </Text>
            <Text
              style={{
                ...styles.text,
                ...(isDarkMode ? dark.text : light.text),
              }}>
              {getLocaleValue('publishedAt')}:{' '}
              {response.published_at.substring(0, 10)}
            </Text>
            <Text
              style={{
                ...styles.text,
                ...(isDarkMode ? dark.text : light.text),
              }}>
              {getLocaleValue('source')}: {response.source}
            </Text>
            <Text
              style={styles.hyberLink}
              onPress={() => Linking.openURL(response.url)}>
              {response.url}
            </Text>
            <View style={{margin: scale(8)}} />
            <View
              style={{
                ...styles.button,
                ...(isDarkMode ? dark.btn : light.btn),
              }}>
              <TouchableWithoutFeedback onPress={onShare}>
                <Text
                  style={{
                    color: isDarkMode
                      ? dark.btnText.color
                      : light.btnText.color,
                  }}>
                  {getLocaleValue('share')}
                </Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      )}
      {error.isOccurred && (
        <Text
          style={{
            ...styles.text,
            ...(isDarkMode ? dark.text : light.text),
          }}>
          {error.message}
        </Text>
      )}
    </>
  );
};

export default NewsDetails;
