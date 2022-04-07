import dynamicLinks from '@react-native-firebase/dynamic-links';

export const getUIdByDynamicLink = async () => {
  const myLink = await dynamicLinks().getInitialLink();
  if (myLink && myLink.url) {
    let uId = myLink.url?.split('=').pop();
    return uId;
  }
  return null;
};

export async function buildShortLink(uuid: string) {
  const link = await dynamicLinks().buildShortLink({
    link: `https://www.thenewsapi.com?uuid=${uuid}`,
    ios: {
      bundleId: 'org.reactjs.native.example.VoisNewsApp',
      appStoreId: '123456789',
    },
    android: {
      packageName: 'com.voisnewsapp',
    },
    domainUriPrefix: 'https://voisnewsapplication.page.link',
  });

  return link;
}
