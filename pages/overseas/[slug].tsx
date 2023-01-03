import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import Link from "next/link";
import Header from "../../components/header";
import OverseasPostHeader from "../../components/overseas/overseas-post-header";
import Layout from "../../components/layout";
import { getAllPosts } from "../../lib/api";
import PostTitle from "../../components/post/post-title";
import Details from "../../components/post/details";
import Head from "next/head";
import type OverseasPostType from "../../interfaces/overseasPost";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { figtree } from "../../components/utils/font";
import Image from "next/image";
import ShareSocial from "../../components/utils/share-social";
import qs from "qs";
import { join } from "path";
import getPostProps from "../../lib/getPostProps";

type Props = {
  mdxContent: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >;
  frontmatter: {
    [key: string]: any;
  };
};

export default function Post({ mdxContent, frontmatter }: Props) {
  const router = useRouter();
  if (!router.isFallback && !frontmatter?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={false}>
      <Container>
        {/* <Header /> */}
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className={`mb-32 ${figtree.className}`}>
              <Head>
                <title>{frontmatter.title} | AUDREYTHEFOODIE</title>
                <meta property="og:image" content={frontmatter.ogImage.url} />
              </Head>
              <OverseasPostHeader
                title={frontmatter.title}
                coverImage={frontmatter.coverImage}
                igLink={frontmatter.igLink}
                date={frontmatter.date}
                country={frontmatter.country}
                nearestMRT={frontmatter.nearestMRT}
                slug={frontmatter.slug}
              />
              <MDXRemote {...mdxContent} />
              <Details
                title={frontmatter.title}
                nearestMRT={frontmatter.nearestMRT}
                location={frontmatter.location}
                rating={frontmatter.rating}
                collab={frontmatter.collab}
                hours={frontmatter.hours}
              />
              <h4 className="text-center md:text-right text-lg mt-8 md:pl-8">
                <Link href="/" className="hover:underline">
                  Check out my other food reviews here! →
                </Link>
              </h4>
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const postsDirectory = join(process.cwd(), "_overseas");
  return getPostProps(params.slug, postsDirectory);
}

export async function getStaticPaths() {
  const postsDirectory = join(process.cwd(), "_overseas");
  const posts = getAllPosts(postsDirectory, ["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
