import React, {useState, useEffect, useContext} from 'react';
import {FlatList, RefreshControl, Text, ActivityIndicator} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {useGetNews} from './NewsRepository';
import NewsItem from '../NewsItem';
import {myNavigation} from '../../../utils/constants';
import styles from './styles';
import {getLocaleValue} from '../../../preferences/Locale';
import AppContext from '../../../context/AppContext';
import dark from '../../../preferences/Theme/dark';
import light from '../../../preferences/Theme/light';
import {wait} from '../../../utils/helper';
import {getFilteredNews} from './NewsController';
import {getUIdByDynamicLink} from '../../../utils/Firebase';

const News = ({navigation}) => {
  const {isDarkMode} = useContext(AppContext);

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredList, setFilteredList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const [response, loading, error, refetch, loadMore] = useGetNews();

  useEffect(() => {
    async function fireDynamicLink() {
      const uId = await getUIdByDynamicLink();
      if (uId) navigation.navigate(myNavigation.main.news.details, {uuid: uId});
    }
    fireDynamicLink();
  }, []);

  useEffect(() => {
    if (response) setFilteredList(response);
  }, [response]);

  useEffect(() => {
    if (response) setFilteredList(getFilteredNews(searchQuery, response));
  }, [searchQuery]);

  const renderItem = ({item}) => (
    <NewsItem
      item={item}
      onPress={() => {
        navigation.navigate(myNavigation.main.news.details, {uuid: item.uuid});
      }}
    />
  );

  const onRefresh = () => {
    setRefreshing(true);
    wait(2000).then(() => {
      setSearchQuery('');
      refetch();
      setRefreshing(false);
    });
  };

  const onLoadMore = () => {
    loadMore();
  };

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
      <FlatList
        data={filteredList}
        renderItem={renderItem}
        initialNumToRender={5}
        onEndReached={onLoadMore}
        keyExtractor={item => item.uuid}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
      {loading && <ActivityIndicator />}
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
