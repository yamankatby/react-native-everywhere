import Link from 'next/link';
import { useRouter } from 'next/router';
import { ThemeProvider, useTheme } from 'next-themes';
import cx from 'classnames';
import { ChevronLeftIcon, ChevronRightIcon, MoonIcon, SunIcon } from '@heroicons/react/outline';
import '../styles/globals.css';
import { useMemo } from 'react';

const index = [
  { title: 'Getting Started', href: '/' },
  [
    { title: 'Running React Native everywhere', href: '/running-react-native-everywhere' },
    { title: 'Overview', href: '' },
    { title: 'Mobile (Android and iOS)', href: '/mobile' },
    { title: 'Web', href: '/web' },
    { title: 'Browser Extension', href: '/browser-extension' },
    { title: 'Windows and macOS', href: '/desktop' },
    { title: 'Electron', href: '/electron' },
    { title: 'Menubar App', href: '/menubar-app' },
  ],
  [
    { title: 'Building for large screens', href: '/building-for-large-screens' },
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

const GitHub = () => (
  <svg className="w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 0C5.3724 0 0 5.3556 0 11.964C0 17.2488 3.438 21.732 8.2068 23.3136C8.8068 23.424 9.0252 23.0544 9.0252 22.7376C9.0252 22.4544 9.0156 21.7008 9.0096 20.7036C5.6712 21.426 4.9668 19.0992 4.9668 19.0992C4.422 17.718 3.6348 17.3496 3.6348 17.3496C2.5452 16.608 3.7176 16.6224 3.7176 16.6224C4.9212 16.7064 5.5548 17.8548 5.5548 17.8548C6.6252 19.6836 8.364 19.1556 9.0468 18.8484C9.1572 18.0768 9.4668 17.5488 9.81 17.25C7.146 16.9488 4.344 15.9216 4.344 11.3376C4.344 10.032 4.812 8.9628 5.5788 8.1276C5.4552 7.8252 5.0436 6.6084 5.6964 4.962C5.6964 4.962 6.7044 4.6404 8.9964 6.1884C9.97544 5.922 10.9854 5.78602 12 5.784C13.02 5.7888 14.046 5.9208 15.0048 6.1872C17.2956 4.6392 18.3012 4.9608 18.3012 4.9608C18.9564 6.6072 18.5436 7.824 18.4212 8.1264C19.1892 8.9616 19.6548 10.0308 19.6548 11.3364C19.6548 15.9324 16.848 16.944 14.1756 17.2404C14.6064 17.6088 14.9892 18.3384 14.9892 19.4556C14.9892 21.054 14.9748 22.344 14.9748 22.7364C14.9748 23.0568 15.1908 23.4288 15.8004 23.3124C20.5644 21.7284 24 17.2476 24 11.9628C24 5.3556 18.6264 0 12 0Z"
      fill="currentColor"
    />
  </svg>
);

const Twitter = () => (
  <svg className="w-5" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M23.9988 2.31646C23.1 2.71406 22.1467 2.97518 21.1707 3.09119C22.1995 2.47592 22.9694 1.50761 23.3371 0.366699C22.3717 0.941268 21.3132 1.34394 20.21 1.56175C19.4689 0.768872 18.4867 0.24303 17.416 0.065975C16.3452 -0.11108 15.246 0.0705742 14.2892 0.582696C13.3323 1.09482 12.5715 1.90871 12.1249 2.89785C11.6784 3.88699 11.5711 4.99595 11.8199 6.05234C9.86198 5.9542 7.94662 5.44542 6.19814 4.559C4.44966 3.67259 2.90714 2.42837 1.67072 0.907123C1.23307 1.65883 1.00309 2.51336 1.00432 3.38318C1.00432 5.0904 1.87323 6.59865 3.19427 7.48169C2.41249 7.45708 1.64792 7.24595 0.964286 6.86591V6.92714C0.964522 8.06415 1.35797 9.16609 2.07792 10.0461C2.79787 10.9262 3.80002 11.5301 4.91444 11.7556C4.18871 11.9523 3.42776 11.9813 2.68917 11.8404C3.00338 12.8191 3.61579 13.675 4.44065 14.2883C5.26551 14.9017 6.26153 15.2417 7.28925 15.2607C6.26783 16.0629 5.09832 16.6559 3.84758 17.0058C2.59684 17.3557 1.2894 17.4557 0 17.3C2.25082 18.7475 4.87099 19.516 7.5471 19.5135C16.6048 19.5135 21.5581 12.0099 21.5581 5.50249C21.5581 5.29056 21.5522 5.07628 21.5428 4.8667C22.5069 4.16988 23.339 3.30668 24 2.31764L23.9988 2.31646Z"
      fill="currentColor"
    />
  </svg>
);

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
          <GitHub />
          <span className="ml-2">GitHub</span>
        </a>
        <a
          className="ml-6 flex items-center hover:underline"
          href="https://twitter.com/yamankatby"
          target="_blank"
          rel="noreferrer"
        >
          <Twitter />
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

const Header = () => (
  <nav className="mb-6">
    <ul className="flex">
      <li>🏠</li>
      <ChevronRightIcon className="mx-3 w-5" />
      <li>Running React Native everywhere</li>
      <ChevronRightIcon className="mx-3 w-5" />
      <li>Mobile</li>
    </ul>
  </nav>
);

const Feedback = () => (
  <div className="flex items-end justify-between">
    <div className="flex flex-col">
      <h5>Was this helpful?</h5>
      <ul className="mt-2 grid grid-cols-4 gap-6">
        <li>
          <img src="https://assets.vercel.com/twemoji/1f62d.svg" className="w-6" alt="💭" />
        </li>
        <li>
          <img src="https://assets.vercel.com/twemoji/1f615.svg" className="w-6" alt="💭" />
        </li>
        <li>
          <img src="https://assets.vercel.com/twemoji/1f600.svg" className="w-6" alt="💭" />
        </li>
        <li>
          <img src="https://assets.vercel.com/twemoji/1f929.svg" className="w-6" alt="💭" />
        </li>
      </ul>
    </div>
    <a href="" className="hover:underline">
      Edit this article on GitHub
    </a>
  </div>
);

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
          <Header />
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
