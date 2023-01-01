import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import Link from "next/link";
import Header from "../../components/header";
import OverseasPostHeader from "../../components/overseas/overseas-post-header";
import Layout from "../../components/layout";
import { getOverseasPostBySlug, getAllOverseasPosts } from "../../lib/api";
import PostTitle from "../../components/post/post-title";
import Details from "../../components/post/details";
import Head from "next/head";
import type OverseasPostType from "../../interfaces/overseasPost";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { figtree } from "../../components/utils/font";
import Image from "next/image";
import ShareSocial from "../../components/utils/share-social";
import qs from "qs";

type Props = {
  post: OverseasPostType;
  morePosts: OverseasPostType[];
  preview?: boolean;
};

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  const { content } = post;
  console.log(post);
  return (
    <Layout preview={preview}>
      <Container>
        {/* <Header /> */}
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className={`mb-32 ${figtree.className}`}>
              <Head>
                <title>{post.title} | AUDREYTHEFOODIE</title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <OverseasPostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                country={post.country}
                nearestMRT={post.nearestMRT}
                slug={post.slug}
              />
              <MDXRemote
                {...content}
                components={{
                  h1: (props) => <h1 {...props} className="text-xl" />,
                  p: (props) => <p {...props} className="mb-6 text-lg" />,
                  img: (props: any) => (
                    <span className="block relative aspect-video">
                      <Image {...props} fill className="object-cover" />
                    </span>
                  ),
                }}
              />
              <Details
                title={post.title}
                nearestMRT={post.nearestMRT}
                location={post.location}
                rating={post.rating}
                collab={post.collab}
                hours={post.hours}
              />
              <iframe
                width="600"
                height="450"
                className="border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${
                  process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
                }&${qs.stringify({
                  q: post.location,
                })}`}
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
  const post = getOverseasPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "country",
    "content",
    "ogImage",
    "coverImage",
    "nearestMRT",
    "hours",
    "rating",
    "collab",
    "location",
  ]);

  const content = await serialize(post.content, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
      format: "mdx",
    },
  });

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const overseasPosts = getAllOverseasPosts(["slug"]);

  return {
    paths: overseasPosts.map((overseasPost) => {
      return {
        params: {
          slug: overseasPost.slug,
        },
      };
    }),
    fallback: false,
  };
}
