export const routes = Object.freeze({
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
  apiToken: 'T1LuHqqpGB6oQIFB32JdvX2ZpIpFaYRlLuB3ut6B',
  routes: {
    top: 'v1/news/top',
    byId: 'v1/news/uuid',
  },
});

export const myStorage = Object.freeze({
  theme: '@theme',
  langauge: '@langauge',
});

export const darkModeSwitchColors = Object.freeze({
  false: '#767577',
  true: '#81b0ff',
});
