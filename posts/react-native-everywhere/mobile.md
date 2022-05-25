---
title: Android and iOS
description: Bootstrapping React Native project and run it on Android and iOS.
label: Mobile (Android and iOS)
sidebar_index: 1
---

# Android and iOS

Let's start by creating a react-native project. Since we will use react-native-cli to create our project and not expo, we have a bunch of set up to to do. I'll not repeat stuff expolained in the react-native docs again you can reffer it to learn how to setup react-native in your compoter.

after fenisheg setting up the enviorment, let's create a new project

```sh
npx react-native init RNEverywhere
```

Optionally you can start a project with TypeScript template

```sh
npx react-native init RNEverywhere --template react-native-template-typescript
```

> During this toutrila if there is anything we have to make it for TypeScript we will explain it

Now we can run the app simply by

```sh
npx react-native start
```

then to run on Android

```sh
npx react-native run-android
```

and for iOS
```sh
npx react-native run-ios
```

Now that we have successfully run the app, let's modify it to create a simple example screen that can run everywhere

Open App.js in your text editor of choice and remove everything and let's start from the scratch:

```js
import {Text, View, Platform} from "react-native"

const App = () => {
  return (
    <View>
      <Text>Hi, React Native everywhere</Text>
      <Text>{Platform.OS}</Text>
    </View>
  )
}

export defualt App;
```
