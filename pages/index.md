I love React Native, who doesn't?! (I have an answer 👉 "🐦'ers" 😜). It's a fantastic tool to write an app once (using the great library, [React](https://reactjs.org/)) and run it on both 🍎 iOS and 🤖 Android. Wait a second, what if it's more than that?!!

## React Native everywhere

There are a dozen of reasons why developers choose to build apps using React Native (you can discover hundreds of reasons lists prepared by different developers by [doing a simple google search](https://googlethatforyou.com?q=Why%20Use%20React%20Native%20for%20Your%20Mobile%20App?)), but definitely **writing a single codebase and running it on both OSs** will be on the top of any reasons list, since this is why React Native exists (If the list was prepared by a web developer, you may see it in second place after "I don't know how to write native apps" 😂).

If we know what power the developers choose React Native for, why not make it even more powerful?

### Does React Native have the capability to run everywhere?

There is already a project called [**React Native for web**](https://necolas.github.io/react-native-web/) maintained by [Nicolas](https://twitter.com/necolas) that can be used to run React Native on the web. As mentioned in the [**React Native for web**](https://necolas.github.io/react-native-web/) website:

> React Native for Web is used in production web apps by [Twitter](https://twitter.com/), [Flipkart](https://twitter.com/naqvitalha/status/969577892991549440), [Uber](https://www.youtube.com/watch?v=RV9rxrNIxnY), [Major League Soccer](https://matchcenter.mlssoccer.com/), and many others.

However, I could not find a production application written entirely in React Native and running on the web (if you know one [tell me](https://twitter.com/compose/tweet?text=@yamankatby)).

And to run React Native on desktop, there is a project maintained by Microsoft itself called [**react-native-windows**](https://microsoft.github.io/react-native-windows/) which can be used to run React Native not only on Windows but also on macOS.

Another solution for macOS will be to run the iOS app on macOS using Mac Catalyst features. Mac Catalyst is a powerful way by Apple itself to run iPad apps (natively) on macOS (Big Sur and later). Nothing special to React Native here. However, if our React Native apps run on iPad that means they run on Mac Catalyst.

**What about Linux?**

Currently, there is no well-maintained project that runs React Native on Linux (there is a couple of proof of concepts out there). However, we can run our React Native apps on the web and this takes us to the next hero, [**Electron**](https://electronjs.org/).

**Electron**](https://electronjs.org/) is a framework for building cross-platform desktop applications (runs on macOS, Windows, and Linux) using web technologies. It's stable and has been there for a while (you're probably using at least one or more apps built with it).

[image here]

Till now we have:

- Android and iOS - (By default)
- Web
- Windows and macOS
- Mac Catalyst
- Electron (macOS, Windows, and Linux)

What else? 🤔 You are right **web extensions** and **menubar apps**. Let's continue 💨

Creating web extensions will not be a problem as we can run React Native apps on the web. Simply we will follow the steps in the official documentations.

- [Getting started with Chrome extensions](https://developer.chrome.com/docs/extensions/mv3/getstarted/)
- [Your first Firefox extension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)

For **menubar apps** there is a project called [menubar](https://github.com/maxogden/menubar) (that simple 😃) can be used to create menubar desktop applications with [**Electron**](https://electronjs.org/). That's mean we have to run:

React Native 👉 React Native for web 👉 Electron 👉 Menubar Apps

😱

I mean, there's a lot to do but believe me it's worth it. We can now add 2 more platforms to our target list.

- Browser Extensions (Chrome, Firefox, and Chromium-based browsers such as Microsoft Edge, Opera, Vivaldi)
- Menubar Apps (macOS, Windows, and Linux)

Now that we know we can run React Native apps anywhere, what's next?

## Building for large screens

- I can remember how painful it was for front-end developers to build a responsive website before Flexbox (2013, ah! that's almost 10 years 👴🏼). In late 2012, Bootstrap 2 was released with the 12-column gird stuff which started a new generation of responsive web.
- On June 5, 2019, during the Apple WWDC keynote, Craig Federighi made [the announcement of the first version of the iPadOS](https://youtu.be/psL_5RIBqnY?t=3805) (An OS for large screens developed as a standalone OS and separate from iOS), bringing the vision of making a separate effort to make apps look neat on large screens.
- It's time to break away from designing for a 16 by 9 portrait phone app and start building UI responsibly. This is [an announcement made by Diana Wong from Android Team In the Android Dev Summit 2021](https://youtu.be/WZgR5Yf1iq8?t=1913) while introducing a new [set of tools and APIs made to make developing for large screens easier](https://developer.android.com/large-screens).
