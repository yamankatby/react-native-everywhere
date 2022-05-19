import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { getPostsDir } from '../utils';

export async function getStaticPaths() {
  const postsDir = await getPostsDir();
  const items = postsDir.flatMap((item) => (item.type === 'category' ? item.items : [item]));
  return {
    paths: items.map((item) => ({
      params: { slug: item.href.slice(1).split('/') },
    })),
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const postsDir = await getPostsDir();
  const items = postsDir.flatMap((item) => (item.type === 'category' ? item.items : [item]));

  const href = '/' + (context.params.slug?.join('/') ?? '');
  const currentIndex = items.findIndex((item) => item.href === href);
  const current = items[currentIndex];
  const source = await serialize(current.markdown);

  return { props: { sidebar: postsDir, source, meta: current } };
}

export default function Post(props) {
  return <MDXRemote {...props.source} />;
}
