import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

export function getPostBySlug(
  slug: string,
  directory: string,
  fields: string[] = []
) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = join(directory, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = fileContents;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(directory: string, fields: string[] = []) {
  const slugs = fs.readdirSync(directory);
  const posts = slugs
    .map((slug) => getPostBySlug(slug, directory, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
