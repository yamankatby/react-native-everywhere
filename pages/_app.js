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

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="flex justify-center">
      <Sidebar />
      <div className="flex min-h-screen max-w-3xl flex-1 flex-col">
        <main className="flex-1">
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  );
}
