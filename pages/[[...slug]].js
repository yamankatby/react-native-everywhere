import fs from "fs/promises";
import path from "path";
import { globby } from "globby";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

export async function getStaticPaths() {
  const paths = await globby(["posts/**/*"]);
  return {
    paths: paths.map((path) => ({
      params: { slug: path.match(/posts\/(.*?)(\/?index)?.md/)[1].split("/") }
    })),
    fallback: false
  };
}

export async function getStaticProps(context) {
  const paths = await globby(["posts"]);

  const allPosts = [];
  for (const p of paths) {
    const file = await fs.readFile(path.join(process.cwd(), p), "utf8");
    const { data: frontmatter, content } = matter(file);
    const source = await serialize(content);
    allPosts.push({
      slug: p.match(/posts\/(.*?)(\/?index)?.md/)[1],
      frontmatter,
      source
    });
  }

  const slug = context.params.slug?.join("/") ?? "";
  const currentIndex = allPosts.findIndex((post) => post.slug === slug);
  const current = allPosts[currentIndex];

  return { props: { source: current.source } };
}

export default function Post(props) {
  return <MDXRemote {...props.source} />;
}
