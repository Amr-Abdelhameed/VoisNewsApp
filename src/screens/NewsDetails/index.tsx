import React, {useState, useEffect} from 'react';
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
import {buildShortLink} from '../../utils/Firebase';
import {scale} from 'react-native-size-matters';
import {myNetwork} from '../../utils/constants';
import {useGetData} from '../../services/use-get-data';
import {useAppTheme} from '../../preferences/Theme/use-app-theme';
import {useAppLanguage} from '../../preferences/Locale/use-app-language';

const NewsDetails = ({route}) => {
  const {colors} = useAppTheme();
  const {strings} = useAppLanguage();

  const {uuid} = route.params;

  const [dynamicLink, setDynamicLink] = useState('');

  const [response, {isLoading, isResolved, isRejected}, errorMessage] =
    useGetData(`${myNetwork.routes.byId}/${uuid}`);

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
      {isLoading && <ActivityIndicator />}
      {isResolved && (
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{uri: response.image_url}}
            resizeMode="stretch"
          />
          <View style={styles.textContainer}>
            <Text style={[styles.text, {color: colors.primaryColor}]}>
              {response.title}
            </Text>
            <Text style={[styles.text, {color: colors.primaryColor}]}>
              {response.description}
            </Text>
            <Text style={[styles.text, {color: colors.primaryColor}]}>
              {strings.publishedAt}: {response.published_at.substring(0, 10)}
            </Text>
            <Text style={[styles.text, {color: colors.primaryColor}]}>
              {strings.source}: {response.source}
            </Text>
            <Text
              style={styles.hyberLink}
              onPress={() => Linking.openURL(response.url)}>
              {response.url}
            </Text>
            <View style={{margin: scale(8)}} />
            <View style={[styles.button, {backgroundColor: colors.btnColor}]}>
              <TouchableWithoutFeedback onPress={onShare}>
                <Text
                  style={{
                    color: colors.btnTextColor,
                  }}>
                  {strings.share}
                </Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      )}
      {isRejected && (
        <Text style={[styles.text, {color: colors.primaryColor}]}>
          {errorMessage}
        </Text>
      )}
    </>
  );
};

export default NewsDetails;
