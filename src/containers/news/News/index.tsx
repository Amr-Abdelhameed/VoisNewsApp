import React, {useState, useEffect, useContext} from 'react';
import {FlatList, RefreshControl, Text, ActivityIndicator} from 'react-native';
import {Searchbar} from 'react-native-paper';
import NewsItem from '../NewsItem';
import {routes, myNetwork} from '../../../utils/constants';
import styles from './styles';
import {getLocaleValue} from '../../../preferences/Locale';
import AppContext from '../../../context/AppContext';
import * as Theme from '../../../preferences/Theme';
import {wait} from '../../../utils/helper';
import {getFilteredNews} from './NewsHelper';
import {getUIdByDynamicLink} from '../../../utils/Firebase';
import {useGetData} from '../../../hooks/useGetData';

const News = ({navigation}) => {
  const {themeMode} = useContext(AppContext);

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredList, setFilteredList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const [response, loading, error, refetch, loadMore] = useGetData(
    myNetwork.routes.top,
  );

  useEffect(() => {
    async function fireDynamicLink() {
      const uId = await getUIdByDynamicLink();
      if (uId) navigation.navigate(routes.main.news.details, {uuid: uId});
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
        navigation.navigate(routes.main.news.details, {uuid: item.uuid});
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
    if (searchQuery.length == 0) loadMore();
  };

  return (
    <>
      <Searchbar
        iconColor={Theme.placeHolderIconColor(themeMode)}
        placeholder={getLocaleValue('search')}
        placeholderTextColor={Theme.placeHolderColor(themeMode)}
        value={searchQuery}
        onChangeText={setSearchQuery}
        inputStyle={Theme.text(themeMode)}
        style={Theme.background(themeMode)}
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
        <Text style={{...styles.error, ...Theme.text(themeMode)}}>
          {error.message}
        </Text>
      )}
    </>
  );
};

export default News;
