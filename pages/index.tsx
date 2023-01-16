import Head from "next/head";
import { join } from "path";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Post from "../interfaces/post";
import OverseasPost from "../interfaces/overseasPost";
import MainSegment from "../components/main-page/main-segment";

type Props = {
  allPosts: Post[];
  allOverseasPosts: OverseasPost[];
};

export default function Index({ allPosts, allOverseasPosts }: Props) {
  const newPosts = allPosts.slice(0, 4);
  const newOverseasPosts = allOverseasPosts.slice(0, 4);
  console.log(allPosts);
  return (
    <>
      <Layout>
        <Head>
          <title>AudreyTheFoodie</title>
        </Head>
        <div className="main-container">
          <Intro
            text={`Just a Singaporean foodie sharing her love for food!`}
          />
          <MainSegment
            posts={newPosts}
            heading={`Newest SG Reviews`}
            route={`/food`}
          />
          <MainSegment
            posts={newOverseasPosts}
            heading={`Newest Overseas Reviews`}
            route={`/overseas`}
          />
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const postsDirectory = join(process.cwd(), "_posts");
  const overseasPostsDirectory = join(process.cwd(), "_overseas");

  const allPosts = getAllPosts(postsDirectory, [
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
    "nearestMRT",
    "zone",
    "tags",
  ]);

  const allOverseasPosts = getAllPosts(overseasPostsDirectory, [
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
    "nearestMRT",
    "country",
  ]);

  return {
    props: { allPosts, allOverseasPosts },
  };
};
