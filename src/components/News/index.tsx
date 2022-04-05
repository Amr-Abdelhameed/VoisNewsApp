import React, {useState, useEffect, useContext, useCallback} from 'react';
import {FlatList, RefreshControl, Text, ActivityIndicator} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {useGetNews} from './NewsRepository';
import NewsItem from '../NewsItem';
import {myNavigation} from '../../utils/constants';
import styles from './styles';
import {getLocaleValue} from '../../utils/Locale';
import {AppContext} from '../../utils/context';
import dark from '../../utils/Theme/dark';
import light from '../../utils/Theme/light';
import {wait} from '../../utils/helper';
import {getFilteredNews} from './NewsController';
import {getUIdByDynamicLink} from '../../utils/Firebase';

const News = ({navigation}) => {
  const {isDarkMode} = useContext(AppContext);

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredList, setFilteredList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const [response, loading, error, refetch] = useGetNews();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => {
      refetch();
      setRefreshing(false);
    });
  }, []);

  useEffect(() => {
    async function fireDynamicLink() {
      const uId = await getUIdByDynamicLink();
      if (uId) navigation.navigate(myNavigation.main.news.details, {uuid: uId});
    }
    fireDynamicLink();
  }, []);

  useEffect(() => {
    if (response) setFilteredList(response.data);
  }, [response]);

  useEffect(() => {
    if (response) {
      const _filteredNews = getFilteredNews(searchQuery, response.data);
      setFilteredList(_filteredNews);
    }
  }, [searchQuery]);

  const renderItem = ({item}) => (
    <NewsItem
      item={item}
      onPress={() => {
        navigation.navigate(myNavigation.main.news.details, {uuid: item.uuid});
      }}
    />
  );

  return (
    <>
      <Searchbar
        iconColor={
          isDarkMode ? dark.placeHolderIconColor : light.placeHolderIconColor
        }
        placeholder={getLocaleValue('search')}
        placeholderTextColor={
          isDarkMode ? dark.placeHolderColor : light.placeHolderColor
        }
        value={searchQuery}
        onChangeText={setSearchQuery}
        inputStyle={isDarkMode ? dark.text : light.text}
        style={isDarkMode ? dark.background : light.background}
      />
      {loading && <ActivityIndicator />}
      <FlatList
        data={filteredList}
        renderItem={renderItem}
        keyExtractor={item => item.uuid}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
      {error.isOccurred && (
        <Text
          style={{...styles.error, ...(isDarkMode ? dark.text : light.text)}}>
          {error.message}
        </Text>
      )}
    </>
  );
};

export default News;
