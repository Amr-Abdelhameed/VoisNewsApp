import React, {useState, useEffect} from 'react';
import {FlatList, RefreshControl, Text, ActivityIndicator} from 'react-native';
import {Searchbar} from 'react-native-paper';
import NewsItem from './NewsItem';
import {routes, myNetwork} from '../../utils/constants';
import styles from './styles';
import {getLocaleValue} from '../../preferences/Locale';
import {wait} from '../../utils/app-helper';
import {getFilteredNews} from './news-helper';
import {getUIdByDynamicLink} from '../../utils/Firebase';
import {useGetData} from '../../services/use-get-data';
import {useAppTheme} from '../../preferences/Theme/use-app-theme';

const News = ({navigation}) => {
  const {colors} = useAppTheme();

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredList, setFilteredList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const [response, {isLoading, isRejected}, errorMessage, refetch, loadMore] =
    useGetData(myNetwork.routes.top);

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
        iconColor={colors.placeHolderIconColor}
        placeholder={getLocaleValue('search')}
        placeholderTextColor={colors.placeHolderColor}
        value={searchQuery}
        onChangeText={setSearchQuery}
        inputStyle={{color: colors.primaryColor}}
        style={{backgroundColor: colors.accentColor}}
      />
      <FlatList
        data={filteredList}
        renderItem={renderItem}
        onEndReached={onLoadMore}
        keyExtractor={item => item.uuid}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
      {isLoading && <ActivityIndicator />}
      {isRejected && (
        <Text style={[styles.error, {color: colors.primaryColor}]}>
          {errorMessage}
        </Text>
      )}
    </>
  );
};

export default News;
