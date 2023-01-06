import Container from "../../components/container";
import MoreStories from "../../components/main-page/more-stories";
import PostPreview from "../../components/main-page/post-preview";
import Intro from "../../components/intro";
import Layout from "../../components/layout";
import { getAllPosts } from "../../lib/api";
import Head from "next/head";
import Post from "../../interfaces/post";
import { join } from "path";
import styles from "../../components/food/food.module.css";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  console.log(allPosts);
  return (
    <>
      <Layout>
        <Head>
          <title>AudreyTheFoodie</title>
        </Head>
        <div>
          <Intro />
          <div className={styles["food-container"]}>
            <div className={styles["main-reviews"]}>
              {allPosts.map((post) => (
                <PostPreview
                  key={post.slug}
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  zone={post.zone}
                  slug={`/posts/${post.slug}`}
                  excerpt={post.excerpt}
                  nearestMRT={post.nearestMRT}
                  location={post.location}
                  rating={post.rating}
                  collab={post.collab}
                />
              ))}
            </div>
          </div>
        </div>
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
