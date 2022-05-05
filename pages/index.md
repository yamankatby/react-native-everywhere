# Introduction

I love React Native, who doesn't?! (actually, I have an answer 👉 "🐦'ers" 😜). React Native is a fantastic library to write an app once (using the great library, [React](https://reactjs.org/)) and run it on both 🍎 iOS and 🤖 Android. Wait a second, what if it's more than that?!!

## React Native everywhere

There are dozens of reasons why developers choose to build their apps using React Native (you can discover some of these reasons by doing [a simple google search](https://googlethatforyou.com?q=Why%20Use%20React%20Native%20for%20Your%20Mobile%20App?)). But definitely **writing a single codebase and running it on both OSs** is the most important one, since this is why React Native exists.

If cross-platform is what makes developers choose React Native, why not make React Native even more powerful?! How? - By making it run on more platforms (everywhere).

![Apps users love, built with Electron](/react-native-everywhere.jpg)

But, 👉

### Does React Native have the capability to run everywhere?

Let's start with the web (where I spend 90% of my life 😃)

There is already a project called [React Native for web](https://necolas.github.io/react-native-web/) maintained by [Nicolas](https://twitter.com/necolas) that can be used to run React Native apps on the web. As mentioned in the [React Native for web](https://necolas.github.io/react-native-web/) website:

> React Native for Web is used in production web apps by [Twitter](https://twitter.com/), [Flipkart](https://twitter.com/naqvitalha/status/969577892991549440), [Uber](https://www.youtube.com/watch?v=RV9rxrNIxnY), [Major League Soccer](https://matchcenter.mlssoccer.com/), and many others.

To be honest, I could not find any production app written entirely in React Native and running on the web (if you know one [tell me](https://twitter.com/compose/tweet?text=@yamankatby)), but don't worry, at the end of these articles you will be able to build the first one. I `return new Promise()`.

**Moving to Desktop 🖥 (Windows, macOS, and Linux)**

To run React Native apps on the desktop, we can use a project called [React Native Windows](https://microsoft.github.io/react-native-windows/) maintained by Microsoft itself. It runs React Native apps not only on Windows but also on macOS.

Another proper solution for macOS is to run the iOS app on Mac Catalyst. Mac Catalyst is a powerful project by Apple made to run iPad apps (natively) on macOS (Big Sur and later). Nothing special to React Native here. However, this means that any iOS app running on the iPad can run on macOS as well (by making small changes).

**What about Linux 🐧?**

Currently, there is no well-maintained project that can be used to run React Native apps (natively) on Linux (there is a couple of proofs-of-concept out there). However, as mentioned before, React Native apps can run on the web, and this takes us to the next target, [Electron](https://electronjs.org/).

[Electron](https://electronjs.org/) is a framework for building cross-platform desktop apps (runs on Windows, macOS, and Linux) using web technologies. It's stable and has been there for a while (you're probably using at least one or more apps built with it).

![Apps users love, built with Electron](/electron-showcase-apps.jpg)

Now we talked about web and desktop, let's talk about the smaller version of them, **browser extensions** and **menubar apps**.

**Browser extensions** will be an easy task since we already have an app running on the web. Just follow the steps in the official documentations, and everything is ready to go 💨.

- [Getting started with Chrome extensions](https://developer.chrome.com/docs/extensions/mv3/getstarted/)
- [Your first Firefox extension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)

For **menubar apps**, we will use a project called [menubar](https://github.com/maxogden/menubar) (that simple 😃), used to create **menubar apps** (runs on Windows, macOS, and Linux) using [Electron](https://electronjs.org/).

Finally, **Android TV** and **tvOS**:

> TV devices support, has been implemented with the intention of making existing React Native applications "just work" with few or no changes needed in the JavaScript code.

This is stated in the documentation of the [React Native TVOS](https://github.com/react-native-tvos/react-native-tvos) project that we will be using to run React Native apps on **Android TV** and **tvOS**.

Now, we have _targets_ 🎯 for:

- Android and iOS (Out of the box)
- Web
- Desktop - Windows and macOS
- Mac Catalyst
- Electron - Windows, macOS, and Linux
- Browser Extensions - Chrome (and [Chromium-based browsers](https://wikipedia.org/wiki/Chromium_(web_browser))) and Firefox
- Menubar Apps
- Android TV and tvOS

Now that we know we can run React Native apps "everywhere", what's next?

## Build for every screen size

Since our app will work on different devices with different screen dimensions, we have to design it in such a way that it fits any screen size (we usually use the term "responsive design" to refer to this concept). This is not an easy task as you might think (web developers have struggled with doing responsive designs for nearly a decade). Especially on React Native, where there is no standard API to use.

So in this section, We'll take a look at:

- How different platforms handles responsive design and what APIs they use
- The Window Size API in React Native and the other 3rd party solutions out there
- The solution I made myself to handle responsive design on React Native.

## Respecting the Platform
