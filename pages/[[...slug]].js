import fs from "fs/promises";
import path from "path";
import { globby } from "globby";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";

export async function getStaticPaths() {
  const paths = (await globby("posts")).filter((path) => !path.endsWith(".json"));
  return {
    paths: paths.map((path) => ({
      params: { slug: path.match(/posts\/(.*?)(\/?index)?.md/)[1].split("/") },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const rootPath = process.cwd();

  const readdir = async (dirPath) => {
    const files = await fs.readdir(dirPath, { withFileTypes: true });

    const items = [];
    for (const file of files) {
      if (file.isDirectory()) {
        const _category_ = await fs.readFile(path.join(dirPath, file.name, "_category_.json"));
        const _category_JSON = JSON.parse(_category_);
        items.push({
          ..._category_JSON,
          type: "category",
          items: await readdir(path.join(dirPath, file.name)),
        });
      } else if (file.name !== "_category_.json") {
        const filePath = path.join(dirPath, file.name);
        const markdown = await fs.readFile(filePath);
        const { data: frontmatter, content } = matter(markdown);
        items.push({
          ...frontmatter,
          type: "item",
          title: frontmatter.title || file.name,
          path: filePath.replace(rootPath, ""),
          slug: filePath.match(/posts(\/.*?)(\/?index)?.md/)[1],
          content,
        });
      }
    }

    return items.sort((a, b) => (a.sidebar_index ?? 0) - (b.sidebar_index ?? 0));
  };

  const sidebar = await readdir(path.join(rootPath, "posts"));
  const allPosts = sidebar.flatMap((item) => (item.type === "category" ? item.items : [item]));

  const slug = context.params.slug?.join("/") ?? "";
  const currentIndex = allPosts.findIndex((post) => post.slug === "/" + slug);
  const current = allPosts[currentIndex];
  const source = await serialize(current.content);

  return { props: { sidebar, source } };
}

export default function Post(props) {
  return <MDXRemote {...props.source} />;
}
