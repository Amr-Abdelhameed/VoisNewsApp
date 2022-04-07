# News App

A simple app to hit the news API and show a list of articles, that shows details when items on the list are tapped (a typical master/detail app), also user able to change theme (dark - light) and language (english - german) in application that implements (ContextAPI, Navigation, Bottom Navigation, Firebase (Dynamic Links), Axios, Custom Hooks, Repository, Localization).

## Demo

[IOS](https://drive.google.com/file/d/1th4nKi6wYVo_fMYxyPsZKmEkCtKAZO-6/view?usp=sharing)

[Android](https://drive.google.com/file/d/1nRQruNNWkeUb77WIbub74lPBttrIc7yg/view?usp=sharing)

## Environment Setup

After cloning, You must run these commands

```bash
  npm install
```

for IOS

```bash
  cd ios/ && pod install && cd ..
```

## API Reference

```https
  Base URL : https://api.thenewsapi.com
```

#### Get top news

```https
  GET /v1/news/top
```

| Parameter   | Type     | Description                               |
| :---------- | :------- | :---------------------------------------- |
| `api_token` | `string` | **Required**. Your API Token              |
| `locale`    | `string` | **Optional**. Your Locale (us, de ...etc) |

#### Get article by Id

```https
  GET /v1/news/uuid/${uuid}
```

| Parameter | Type     | Description                        |
| :-------- | :------- | :--------------------------------- |
| `uuid`    | `string` | **Required**. UId of item to fetch |
