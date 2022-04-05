export const getFilteredNews = (searchValue: string, newsList: any) => {
  return newsList.filter((item: any) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase()),
  );
};
