import Link from 'next/link';
import '../styles/globals.css';

const index = [
  { title: 'Overview', href: '/' },
  [
    { title: 'Running React Native everywhere', href: '/running-react-native-everywhere' },
    { title: 'Mobile (Android and iOS)', href: '/mobile' },
    { title: 'Web', href: '/web' },
    { title: 'Browser Extension', href: '/browser-extension' },
    { title: 'Windows and macOS', href: '/desktop' },
    { title: 'Electron', href: '/electron' },
    { title: 'Menubar App', href: '/menubar-app' },
  ],
  [
    { title: 'Building for large screens', href: '/building-for-large-screens' },
    { title: 'Overview', href: '/' },
    { title: 'Responsive Design', href: '/responsive-design' },
    { title: 'Layouts', href: '/layouts ' },
  ],
  [
    { title: 'Studies', href: '/studies' },
    { title: 'Overview', href: '/' },
    { title: 'Habit Tracker', href: '/habit-tracker' },
    { title: 'Pomodoro - Time Tracker', href: '/pomodoro' },
  ],
  { title: 'Acknowledgments', href: '/acknowledgments' },
];

const SidebarItem = ({ title, href }) => (
  <Link href={href}>
    <a>{title}</a>
  </Link>
);

const SidebarGroup = ({ items }) => (
  <>
    <h3 className="text-sm uppercase text-gray-500">{items[0].title}</h3>
    <ul className="border-l pl-6 pb-2.5">
      {items.slice(1).map((item) => (
        <li key={item.href} className="mt-2.5">
          <SidebarItem title={item.title} href={items[0].href + item.href} />
        </li>
      ))}
    </ul>
  </>
);

const Sidebar = () => (
  <aside className="max-w-xs flex-1 border-r px-6">
    <ul>
      {index.map((item) => (
        <li key={item.href || item[0].href} className="mt-6">
          {Array.isArray(item) ? <SidebarGroup items={item} /> : <SidebarItem title={item.title} href={item.href} />}
        </li>
      ))}
    </ul>
  </aside>
);

const Footer = () => (
  <footer className="flex flex-col items-center">
    <ul className="flex">
      <li>
        <a href="https://github.com/yamankatby/react-native-beyond-mobile">Source code</a>
      </li>
      <li className="ml-10">
        <a href="https://github.com/yamankatby/react-native-beyond-mobile/issues/new/choose">Report issue</a>
      </li>
      <li className="ml-10">
        <a href="https://github.com/yamankatby/react-native-beyond-mobile/discussions">Ask question</a>
      </li>
    </ul>
    <p className="mt-3">
      Apr 1, 2022 at <a href="https://invertase.io">Invertase</a>
    </p>
    <p className="mt-3">
      Made with ❤️ by <a href="https://twitter.com/yamankatby">Yaman KATBY</a>
    </p>
  </footer>
);

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="flex justify-center">
      <Sidebar />
      <div className="flex min-h-screen max-w-3xl flex-1 flex-col p-6">
        <main className="prose max-w-none flex-1">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </div>
  );
}
