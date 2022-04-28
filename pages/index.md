# Introduction

I love React Native, who doesn't?! (actually, I have an answer 👉 "🐦'ers" 😜). React Native is a fantastic library to write an app once (using the great library, [React](https://reactjs.org/)) and run it on both 🍎 iOS and 🤖 Android. Wait a second, what if it's more than that?!!

## React Native everywhere

There are dozens of reasons why developers choose to build their apps using React Native (you can discover some of these reasons by doing [a simple google search](https://googlethatforyou.com?q=Why%20Use%20React%20Native%20for%20Your%20Mobile%20App?)). But definitely **writing a single codebase and running it on both OSs** is the most important one, since this is why React Native exists.

If cross-platform is what makes developers choose React Native, why not make React Native even more powerful?! How? - By making it run on more platforms (everywhere).

But, 👉

### Does React Native have the capability to run everywhere?

Let's start with the web (where I spend 90% of my life 😃)

There is already a project called [**React Native for web**](https://necolas.github.io/react-native-web/) maintained by [Nicolas](https://twitter.com/necolas) that can be used to run React Native apps on the web. As mentioned in the [**React Native for web**](https://necolas.github.io/react-native-web/) website:

> React Native for Web is used in production web apps by [Twitter](https://twitter.com/), [Flipkart](https://twitter.com/naqvitalha/status/969577892991549440), [Uber](https://www.youtube.com/watch?v=RV9rxrNIxnY), [Major League Soccer](https://matchcenter.mlssoccer.com/), and many others.

To be honest, I could not find any production app written entirely in React Native and running on the web (if you know one [tell me](https://twitter.com/compose/tweet?text=@yamankatby)), but don't worry, at the end of these articles you will be able to build the first one. I `return new Promise()`.

**Moving to Desktop 🖥 (Windows, macOS, and Linux)**

To run React Native apps on the desktop, we can use a project called [**React Native Windows**](https://microsoft.github.io/react-native-windows/) maintained by Microsoft itself. It runs React Native apps not only on Windows but also on macOS.

Another proper solution for macOS is to run the iOS app on Mac Catalyst. Mac Catalyst is a powerful project by Apple made to run iPad apps (natively) on macOS (Big Sur and later). Nothing special to React Native here. However, this means that any iOS app running on the iPad can run on macOS as well (by making small changes).

**What about Linux 🐧?**

Currently, there is no well-maintained project that can be used to run React Native apps (natively) on Linux (there is a couple of proofs-of-concept out there). However, as mentioned before, React Native apps can run on the web, and this takes us to the next target, [**Electron**](https://electronjs.org/).

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
