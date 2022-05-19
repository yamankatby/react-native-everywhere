import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export const readDir = async (dirPath, config) => {
  const { categoryFileName, sortBy, pathToHref } = config;

  const files = await fs.readdir(dirPath, { withFileTypes: true });

  const items = [];

  for (let file of files) {
    const filePath = path.join(dirPath, file.name);

    if (file.isDirectory()) {
      let category = { label: file.name };

      try {
        const fileContent = await fs.readFile(path.join(filePath, categoryFileName));
        const json = JSON.parse(fileContent);
        category = { ...category, ...json };
      } catch (e) {}

      items.push({
        ...category,
        type: 'category',
        items: await readDir(filePath, config),
        path: filePath,
      });
    } else if (file.name !== categoryFileName) {
      const fileContent = await fs.readFile(filePath);
      const { data: frontmatter, content: markdown } = matter(fileContent);

      items.push({
        ...frontmatter,
        type: 'item',
        label: frontmatter.label || frontmatter.title || file.name,
        path: filePath,
        href: pathToHref(filePath),
        markdown,
      });
    }
  }

  return items.sort((a, b) => (a[sortBy] ?? 0) - (b[sortBy] ?? 0));
};

export const getDir = async () => {
  const dirPath = path.resolve(process.cwd(), 'posts');
  return await readDir(dirPath, {
    categoryFileName: '_category_.json',
    sortBy: 'sidebar_index',
    pathToHref: (path) => path.match(/posts(\/.*?)(\/?index)?.md/)[1],
  });
};
