# Random Quotes Mobile App

A cross-platform Expo and React Native app that fetches a random quote from an external API. The app runs on Android, iOS, and web through a single Expo Router entry point.

## App review

> **Pre-release preview:** The app is not live in an app store yet. This review shows the current Android UI running during development.

![Random Quotes app review showing a generated quote](/Screenshot_1795003609.png)

## Features

- Fetches a random quote and author from DummyJSON
- Handles loading, success, and error states
- Prevents repeated requests while a request is in progress
- Uses the Expo Router stack navigator
- Includes Android, iOS, and web app configuration
- Uses React Native `StyleSheet` for platform-native styling

## Tech stack

- Expo SDK 58
- React 19.3
- React Native 0.88.1
- Expo Router 58
- TypeScript 6
- ESLint with Expo configuration

## Prerequisites

Install the following before starting the project:

- Node.js with npm
- Android Studio and an Android emulator, or a physical Android/iOS device
- Expo Go, for a supported development-build workflow
- Xcode and CocoaPods on macOS for iOS development

Use npm in this repository because `package-lock.json` is checked in.

## Installation

```bash
npm install
```

## Running the app

Start the Expo development server:

```bash
npm start
```

You can open the app using an Android emulator, iOS simulator, Expo Go, or a web browser:

```bash
npm run android
npm run ios
npm run web
```

## Project structure

```text
src/
  app/
    _layout.tsx  Expo Router root stack layout
    index.tsx    Random quote screen
assets/
  images/        App icons and splash assets
  expo.icon/     iOS icon source
app.json         Expo application configuration
eslint.config.js ESLint configuration
tsconfig.json    Strict TypeScript configuration
package.json     Dependencies and npm scripts
```

The main screen is in `src/app/index.tsx`. Expo Router treats each file in `src/app` as a route, and `_layout.tsx` defines the root stack navigator.

## How it works

When the user presses **Generate Quote**, the app:

1. Sets loading and error state.
2. Sends a request to `https://dummyjson.com/quotes/random`.
3. Parses `quote` and `author` from the JSON response.
4. Displays the quote and author, or an error message if the request fails.

The request button is disabled during loading to prevent duplicate requests.

## Configuration

Application metadata and assets are configured in `app.json`:

- App name: `DailyQuotes-MobileApp`
- Expo slug: `DailyQuotes-MobileApp`
- Supported orientation: portrait
- System interface style: automatic
- Custom URL scheme: `dailyquotesmobileapp`
- Expo Router and React Compiler enabled
- Splash screen and platform icon assets configured

Environment variables are not currently required.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm start` | Start the Expo development server |
| `npm run android` | Start Expo and open Android |
| `npm run ios` | Start Expo and open iOS |
| `npm run web` | Start the Expo web server |
| `npm run lint` | Run Expo ESLint |
| `npm run reset-project` | Move starter example files and create a blank app |

## Code quality

Run lint and TypeScript checks before submitting changes:

```bash
npm run lint
npx tsc --noEmit
```

The repository currently contains a generated `example/` directory. It is not part of the active app route in `src/app`; if type-checking from the repository root reports unresolved imports from `example/`, exclude that directory or remove it from the root workspace before adding it as a supported example project.
