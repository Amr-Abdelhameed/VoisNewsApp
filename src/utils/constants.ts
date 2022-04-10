export const myNavigation = Object.freeze({
  splash: {
    stack: 'splashStack',
    name: 'splash',
  },
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
  apiToken: 'GHJ4Hp0v60vWPgfEozfaKzPLn7aBAQpO2ZuUsmWo',
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
