export const getFilteredNews = (searchValue: string, newsList: any) => {
  return newsList.filter((item: any) =>
    item.title.toLowerCase().includes(searchValue.toLowerCase()),
  );
};

export const removeDuplicates = (array: any) => {
  return Array.from(new Set(array));
};
