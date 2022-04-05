export const myNavigation = Object.freeze({
  main: {
    stack: 'mainStack',
    news: {
      stack: 'newsStack',
      name: 'news',
      details: 'details',
    },
    settings: {
      stack: 'settingsStack',
      name: 'settings',
    },
  },
});

export const myNetwork = Object.freeze({
  baseURL: 'https://api.thenewsapi.com',
  apiToken: 'YfwbvZTzIYbNLZoNlLs3SeDfWIoscc52Og4jVVJr',
  routes: {
    top: 'v1/news/top',
    byId: 'v1/news/uuid',
  },
});

export const myLocalization = Object.freeze({
  defaultLocale: 'us',
});

export const myStorage = Object.freeze({
  themeMode: '@themeMode',
  langauge: '@langauge',
});
