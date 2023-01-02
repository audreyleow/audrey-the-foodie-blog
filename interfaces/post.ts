import { MDXRemoteSerializeResult } from "next-mdx-remote";

type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  excerpt: string;
  ogImage: {
    url: string;
  };
  igLink: string;
  content: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
  nearestMRT: string;
  zone: string;
  location: string;
  rating: string;
  collab: boolean;
  hours: string;
};

export default PostType;
