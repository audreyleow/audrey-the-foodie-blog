import Head from "next/head";
import Link from "next/link";
import { join } from "path";
import Container from "../components/container";
import MoreStories from "../components/main-page/more-stories";
import HeroPost from "../components/main-page/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Post from "../interfaces/post";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  console.log(allPosts);
  return (
    <>
      <Layout>
        <Head>
          <title>AudreyTheFoodie</title>
        </Head>
        <Container>
          <Intro
            text={`Just a Singaporean foodie sharing her love for food!`}
          />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              zone={heroPost.zone}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          <Link href={`/food`}>
            <div className="redirect-filter">
              Looking for something&nbsp;
              <span style={{ textDecoration: "underline" }}> specific?</span> →
            </div>
          </Link>
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const postsDirectory = join(process.cwd(), "_posts");
  const allPosts = getAllPosts(postsDirectory, [
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
    "nearestMRT",
    "zone",
  ]);

  return {
    props: { allPosts },
  };
};
