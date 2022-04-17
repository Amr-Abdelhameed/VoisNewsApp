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
import {useAppTheme} from '../../preferences/Theme/use-app-theme';
import {useAppLanguage} from '../../preferences/Locale/use-app-language';
import {useNewsDetailsData} from './use-news-details-data';
import {useAppDispatch} from '../../utils/app-helper';
import {myNetwork} from '../../utils/constants';
import {fetchArticleById} from '../../store/actions/news-details-actions';

const NewsDetails = ({route}) => {
  const dispatch = useAppDispatch();

  const {colors} = useAppTheme();
  const {strings} = useAppLanguage();

  const {uuid} = route.params;

  const [dynamicLink, setDynamicLink] = useState('');

  const {data, status, errorMessage} = useNewsDetailsData();
  const {isLoading, isResolved, isRejected} = status;

  useEffect(() => {
    dispatch(fetchArticleById(myNetwork.routes.byId, uuid));
  }, []);

  useEffect(() => {
    async function buildDynamicLink() {
      const link = await buildShortLink(uuid);
      setDynamicLink(link);
    }
    buildDynamicLink();
  }, []);

  const onShare = async () => await Share.share({message: dynamicLink});

  return (
    <>
      {isLoading && <ActivityIndicator />}
      {isResolved && (
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{uri: data.image_url}}
            resizeMode="stretch"
          />
          <View style={styles.textContainer}>
            <Text style={[styles.text, {color: colors.primaryColor}]}>
              {data.title}
            </Text>
            <Text style={[styles.text, {color: colors.primaryColor}]}>
              {data.description}
            </Text>
            <Text style={[styles.text, {color: colors.primaryColor}]}>
              {strings.publishedAt}: {data.published_at.substring(0, 10)}
            </Text>
            <Text style={[styles.text, {color: colors.primaryColor}]}>
              {strings.source}: {data.source}
            </Text>
            <Text
              style={styles.hyberLink}
              onPress={() => Linking.openURL(data.url)}>
              {data.url}
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
