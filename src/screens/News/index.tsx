import React, {useState, useEffect} from 'react';
import {FlatList, RefreshControl, Text, ActivityIndicator} from 'react-native';
import {Searchbar} from 'react-native-paper';
import NewsItem from './NewsItem';
import {routes, myNetwork} from '../../utils/constants';
import styles from './styles';
import {wait} from '../../utils/app-helper';
import {getFilteredNews} from './news-helper';
import {getUIdByDynamicLink} from '../../utils/Firebase';
import {useAppTheme} from '../../preferences/Theme/use-app-theme';
import {useAppLanguage} from '../../preferences/Locale/use-app-language';
import {useNewsData} from './use-news-data';
import {useAppDispatch} from '../../utils/Hooks';
import {fetchNews} from '../../store/actions/news-actions';

const News = ({navigation}) => {
  const dispatch = useAppDispatch();

  const {colors} = useAppTheme();
  const {strings} = useAppLanguage();

  const {list, status, errorMessage} = useNewsData();
  const {isLoading, isRejected} = status;

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredList, setFilteredList] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const [page, setPage] = useState(1);
  const [refreshingCount, setRefreshingCount] = useState(0);

  const refetch = (searchQuery: string = '', page: number = 1) => {
    setSearchQuery(searchQuery);
    setPage(page);
    setRefreshingCount(previous => previous + 1);
  };

  useEffect(() => {
    async function fireDynamicLink() {
      const uId = await getUIdByDynamicLink();
      uId && navigation.navigate(routes.main.news.details, {uuid: uId});
    }
    fireDynamicLink();
  }, []);

  useEffect(() => {
    dispatch(fetchNews(myNetwork.routes.top, page, strings.locale));
  }, [refreshingCount]);

  useEffect(() => {
    list && setFilteredList(list);
  }, [list]);

  useEffect(() => {
    list && setFilteredList(getFilteredNews(searchQuery, list));
  }, [searchQuery]);

  useEffect(() => {
    refetch();
  }, [strings]);

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
      refetch();
      setRefreshing(false);
    });
  };

  const onLoadMore = () => {
    if (searchQuery.length == 0) refetch(searchQuery, page + 1);
  };

  return (
    <>
      <Searchbar
        iconColor={colors.placeHolderIconColor}
        placeholder={strings.search}
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
