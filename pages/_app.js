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
    { title: 'Layout', href: '/layout' },
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
  <li>
    <Link href={href}>
      <a>{title}</a>
    </Link>
  </li>
);

const SidebarGroup = ({ items }) => (
  <li>
    <h3>{items[0].title}</h3>
    <ul>
      {items.slice(1).map((item) => (
        <SidebarItem key={item.href} title={item.title} href={items[0].href + item.href} />
      ))}
    </ul>
  </li>
);

const Sidebar = () => (
  <aside>
    <ul>
      {index.map((item) =>
        Array.isArray(item) ? (
          <SidebarGroup key={item[0].href} items={item} />
        ) : (
          <SidebarItem key={item.href} title={item.title} href={item.href} />
        )
      )}
    </ul>
  </aside>
);

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Sidebar />
      <Component {...pageProps} />
    </div>
  );
}
