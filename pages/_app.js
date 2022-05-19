import Link from 'next/link';
import { useRouter } from 'next/router';
import cx from 'classnames';
import '../styles/globals.css';

const SidebarItem = ({ title, href }) => {
  const { pathname } = useRouter();
  return (
    <Link href={href}>
      <a className={cx('hover:underline', { 'text-blue-600 dark:text-blue-400': href === pathname })}>{title}</a>
    </Link>
  );
};

const SidebarCategory = ({ category }) => (
  <>
    <h3 className="text-sm uppercase text-gray-500">{category.label}</h3>
    <ul className="border-l pl-6 pb-2.5 dark:border-gray-800">
      {category.items.map((item) => (
        <li key={item.slug} className="mt-2.5">
          <SidebarItem title={item.title} href={item.slug} />
        </li>
      ))}
    </ul>
  </>
);

export default function MyApp({ Component, pageProps: { sidebar, ...rest } }) {
  return (
    <div className="flex justify-center">
      <div>
        <aside className="h-screen w-80 fixed overflow-y-scroll">
          <ul>
            {sidebar.map((item) => (
              <li key={item.slug || item.items[0].slug} className="mt-6">
                {item.type === 'category' ? (
                  <SidebarCategory category={item} />
                ) : (
                  <SidebarItem title={item.title} href={item.slug} />
                )}
              </li>
            ))}
          </ul>
        </aside>
        <main className="ml-80 min-h-screen my-6">
          <article className="prose prose-lg dark:prose-invert">
            <Component {...rest} />
          </article>
        </main>
      </div>
    </div>
  );
}
