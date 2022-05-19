import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { getDir } from '../utils';

export async function getStaticPaths() {
  const dir = await getDir();
  const items = dir.flatMap((item) => (item.type === 'category' ? item.items : [item]));
  return {
    paths: items.map((item) => ({
      params: { slug: item.href.slice(1).split('/') },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const dir = await getDir();
  const items = dir.flatMap((item) => (item.type === 'category' ? item.items : [item]));

  const href = '/' + (context.params.slug?.join('/') ?? '');
  const currentIndex = items.findIndex((item) => item.href === href);
  const current = items[currentIndex];
  const source = await serialize(current.markdown);

  return { props: { sidebar: dir, source } };
}

export default function Post(props) {
  return <MDXRemote {...props.source} />;
}
