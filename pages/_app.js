import Link from 'next/link';
import { useRouter } from 'next/router';
import { ThemeProvider, useTheme } from 'next-themes';
import cx from 'classnames';
import { ChevronLeftIcon, ChevronRightIcon, MoonIcon, SunIcon } from '@heroicons/react/outline';
import '../styles/globals.css';
import { useMemo } from 'react';

const index = [
  { title: 'Introduction', href: '/' },
  [
    { title: 'React Native everywhere', href: '/react-native-everywhere' },
    { title: 'Overview', href: '' },
    { title: 'Mobile (Android and iOS)', href: '/mobile' },
    { title: 'Web', href: '/web' },
    { title: 'Browser Extension', href: '/browser-extension' },
    { title: 'Windows and macOS', href: '/desktop' },
    { title: 'Electron', href: '/electron' },
    { title: 'Menubar App', href: '/menubar-app' },
  ],
  [
    { title: 'Build for every screen size', href: '/build-for-every-screen-size' },
    { title: 'Overview', href: '' },
    { title: 'Responsive Design', href: '/responsive-design' },
    { title: 'Layouts', href: '/layouts' },
  ],
  [
    { title: 'Studies', href: '/studies' },
    { title: 'Overview', href: '' },
    { title: 'Habit Tracker', href: '/habit-tracker' },
    { title: 'Pomodoro - Time Tracker', href: '/pomodoro' },
  ],
  { title: 'Acknowledgments', href: '/acknowledgments' },
];

const getRoutes = () => {
  const routes = [];
  index.forEach((item) => {
    if (Array.isArray(item)) {
      item.slice(1).forEach((subItem, index) => {
        routes.push({ title: index === 0 ? item[0].title : subItem.title, href: item[0].href + subItem.href });
      });
    } else {
      routes.push(item);
    }
  });
  return routes;
};

const SidebarItem = ({ title, href }) => {
  const { pathname } = useRouter();
  return (
    <Link href={href}>
      <a className={cx('hover:underline', { 'text-blue-600 dark:text-blue-400': href === pathname })}>{title}</a>
    </Link>
  );
};

const SidebarGroup = ({ items }) => (
  <>
    <h3 className="text-sm uppercase text-gray-500">{items[0].title}</h3>
    <ul className="border-l pl-6 pb-2.5 dark:border-gray-800">
      {items.slice(1).map((item) => (
        <li key={item.href} className="mt-2.5">
          <SidebarItem title={item.title} href={items[0].href + item.href} />
        </li>
      ))}
    </ul>
  </>
);

const Sidebar = () => {
  const { setTheme, resolvedTheme } = useTheme();
  return (
    <aside className="flex max-w-xs flex-1 flex-col justify-between border-r px-6 pb-6 dark:border-gray-800">
      <ul>
        {index.map((item) => (
          <li key={item.href || item[0].href} className="mt-6">
            {Array.isArray(item) ? <SidebarGroup items={item} /> : <SidebarItem title={item.title} href={item.href} />}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex items-center">
        <a
          className="flex items-center hover:underline"
          href="https://github.com/yamankatby/react-native-beyond-mobile"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/github.svg" className="w-5" />
          <span className="ml-2">GitHub</span>
        </a>
        <a
          className="ml-6 flex items-center hover:underline"
          href="https://twitter.com/yamankatby"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/twitter.svg" className="w-5" />
          <span className="ml-2">Twitter</span>
        </a>
        <button
          className="ml-auto"
          onClick={() => {
            setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
          }}
        >
          {resolvedTheme === 'light' ? <MoonIcon className="w-6" /> : <SunIcon className="w-6" />}
        </button>
      </div>
    </aside>
  );
};

const Breadcrumbs = () => {
  const { pathname } = useRouter();

  const segments = pathname.split('/').filter(Boolean);

  return (
    <nav className="mb-6">
      <ul className="flex">
        <li>
          <Link href="/">
            <a className="hover:underline">🏠</a>
          </Link>
        </li>
        {segments.map((_, index) => {
          const href = '/' + segments.slice(0, index + 1).join('/');
          const route = getRoutes().find((route) => route.href === href);
          return (
            <li key={href} className="flex">
              <ChevronRightIcon className="mx-3 w-5" />
              <Link href={href}>
                <a className="hover:underline">{route?.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const Feedback = () => {
  const { pathname } = useRouter();

  const withIndex =
    pathname === '/' ||
    pathname === '/react-native-everywhere' ||
    pathname === '/build-for-every-screen-size' ||
    pathname === '/studies';

  return (
    <div className="flex items-end justify-between">
      <div className="flex flex-col">
        <h5>Was this helpful?</h5>
        <ul className="mt-2 grid grid-cols-4 gap-6">
          <li>
            <a
              href="https://github.com/yamankatby/react-native-beyond-mobile/issues/new"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/1.svg" className="w-6" alt="Not at all" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/yamankatby/react-native-beyond-mobile/issues/new"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/2.svg" className="w-6" alt="Not bad" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/yamankatby/react-native-beyond-mobile/issues/new"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/3.svg" className="w-6" alt="Good" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/yamankatby/react-native-beyond-mobile/issues/new"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/4.svg" className="w-6" alt="Great" />
            </a>
          </li>
        </ul>
      </div>
      <a
        href={`https://github.com/yamankatby/react-native-beyond-mobile/edit/website/pages${
          pathname + (withIndex ? '/index' : '')
        }.md`}
        className="hover:underline"
        target="_blank"
        rel="noreferrer"
      >
        Edit this article on GitHub
      </a>
    </div>
  );
};

const Pager = () => {
  const { pathname } = useRouter();

  const prevRoute = useMemo(() => {
    const routes = getRoutes();
    return routes[routes.findIndex((route) => route.href === pathname) - 1];
  }, [pathname]);

  const nextRoute = useMemo(() => {
    const routes = getRoutes();
    return routes[routes.findIndex((route) => route.href === pathname) + 1];
  }, [pathname]);

  return (
    <nav>
      <ul className="grid grid-cols-2 gap-6">
        {prevRoute && (
          <li className="col-span-1">
            <Link href={prevRoute.href}>
              <a className="group flex items-center">
                <ChevronLeftIcon className="w-5 text-gray-500 dark:text-gray-400" />
                <div className="ml-6 flex flex-col">
                  <span className="text-sm uppercase text-gray-500 dark:text-gray-400">Prev</span>
                  <span className="text-blue-600 group-hover:underline dark:text-blue-400">{prevRoute.title}</span>
                </div>
              </a>
            </Link>
          </li>
        )}
        {nextRoute && (
          <li className="col-span-1 col-start-2">
            <Link href={nextRoute.href}>
              <a className="group flex items-center justify-end">
                <div className="mr-6 flex flex-col items-end">
                  <span className="text-sm uppercase text-gray-500 dark:text-gray-400">Next</span>
                  <span className="text-blue-600 group-hover:underline dark:text-blue-400">{nextRoute.title}</span>
                </div>
                <ChevronRightIcon className="w-5 text-gray-500 dark:text-gray-400" />
              </a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

const Footer = () => (
  <footer className="flex items-end justify-between">
    <div>
      <p>
        Apr 1, 2022 at{' '}
        <a href="https://invertase.io" target="_blank" rel="noreferrer" className="hover:underline">
          Invertase
        </a>
      </p>
      <p className="mt-1">
        Made with ❤️ by{' '}
        <a href="https://twitter.com/yamankatby" target="_blank" rel="noreferrer" className="hover:underline">
          Yaman KATBY
        </a>
      </p>
    </div>
    <ul className="flex">
      <li>
        <a
          href="https://github.com/yamankatby/react-native-beyond-mobile"
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          Source code
        </a>
      </li>
      <li className="ml-6">
        <a
          href="https://github.com/yamankatby/react-native-beyond-mobile/issues/new/choose"
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          Report issue
        </a>
      </li>
      <li className="ml-6">
        <a
          href="https://github.com/yamankatby/react-native-beyond-mobile/discussions"
          target="_blank"
          rel="noreferrer"
          className="hover:underline"
        >
          Ask question
        </a>
      </li>
    </ul>
  </footer>
);

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className="flex justify-center">
        <Sidebar />
        <div className="flex min-h-screen max-w-3xl flex-1 flex-col p-6">
          <Breadcrumbs />
          <main className="prose max-w-none flex-1 dark:prose-invert">
            <Component {...pageProps} />
          </main>
          <Feedback />
          <hr className="my-6 dark:border-gray-800" />
          <Pager />
          <hr className="my-6 dark:border-gray-800" />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
