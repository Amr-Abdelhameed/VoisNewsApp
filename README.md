# News App

A simple app to hit the news API and show a list of articles, that shows details when items on the list are tapped (a typical master/detail app), also user able to change theme (dark - light) and language (english - german) in application that implements (ContextAPI, Navigation, Bottom Navigation, Firebase (Dynamic Links), Axios, Custom Hooks, Repository, Localization).

## Demo

[IOS](https://drive.google.com/drive/folders/1kqSd6WjvM5-4POXduIYGvIZxIgb6vTb-?usp=sharing)

[Android](https://drive.google.com/drive/folders/1cF2AKTnscDnGZ70A9E2r1Qi5dVonWWV_?usp=sharing)

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
