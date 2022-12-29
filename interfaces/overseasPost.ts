import { MDXRemoteSerializeResult } from "next-mdx-remote";

type OverseasPostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
  nearestMRT: string;
  country: string;
  location: string;
  rating: string;
  collab: boolean;
  hours: string;
};

export default OverseasPostType;
