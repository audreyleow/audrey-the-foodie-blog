import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";
import { getPostBySlug } from "./api";

export default async function getPostProps(slug: string, directory: string) {
  const { content, ...frontmatter } = getPostBySlug(slug, directory, [
    "title",
    "date",
    "slug",
    "zone",
    "content",
    "ogImage",
    "igLink",
    "coverImage",
    "nearestMRT",
    "hours",
    "rating",
    "collab",
    "location",
    "excerpt",
    "imgArray",
    "country",
  ]);

  const { frontmatter: frontmatterRemoved, ...mdxContent } = await serialize(
    content,
    {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
      parseFrontmatter: true,
      scope: frontmatter,
    }
  );

  return {
    props: {
      mdxContent,
      frontmatter,
    },
  };
}
