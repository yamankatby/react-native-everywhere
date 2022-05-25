import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import cx from 'classnames';

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
        <li key={item.href} className="mt-2.5">
          <SidebarItem title={item.label} href={item.href} />
        </li>
      ))}
    </ul>
  </>
);

const Layout = ({children, meta, sidebar}) => {
  return (
    <div className="flex justify-center">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />

        <meta property="og:type" content="article" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content="LINK TO THE IMAGE FILE" />
        <meta property="og:url" content="PERMALINK" />
        <meta property="og:site_name" content="React Native everywhere" />

        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content="LINK TO IMAGE" />
        <meta name="twitter:site" content="@yamankatby" />
        <meta name="twitter:creator" content="@yamankatby" />
      </Head>

      <div>
        <aside className="h-screen w-80 fixed overflow-y-scroll">
          <ul>
            {sidebar?.map((item) => (
              <li key={item.href || item.items[0].href} className="mt-6">
                {item.type === 'category' ? (
                  <SidebarCategory category={item} />
                ) : (
                  <SidebarItem title={item.label} href={item.href} />
                )}
              </li>
            ))}
          </ul>
        </aside>
        <main className="ml-80 min-h-screen my-6">
          <article className="prose prose-lg dark:prose-invert">
            {children}
          </article>
        </main>
      </div>
    </div>
  );
}

export default Layout;
