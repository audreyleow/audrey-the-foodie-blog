import { GetStaticProps } from "next";
import Head from "next/head";
import { join } from "path";
import Layout from "../../../components/layout";
import PostPreview from "../../../components/main-page/post-preview";
import OverseasNewestPosts from "../../../components/overseas/overseas-newest-posts";
import { Items, getAllPosts } from "../../../lib/api";
import CountryRoute from "../../../components/utils/country-route";
import styles from "../../../components/food/food.module.css";
import { capitalize } from "lodash";
import OverseasNav from "../../../components/overseas/overseas-nav";

const COUNTRIES = ["italy", "germany", "vietnam", "malaysia", "france"];

export default function Country({
  posts,
  selectedCountry,
}: {
  posts: Items[];
  selectedCountry: string;
}) {
  return (
    <Layout>
      <Head>
        <title>AudreyTheFoodie</title>
      </Head>
      <div className={styles["overseas-container"]}>
        <OverseasNav country={selectedCountry} />
        <OverseasNewestPosts country={selectedCountry} />
        <div className={styles["food-container"]}>
          <div className={styles["main-reviews"]}>
            {posts.map((post) => (
              <PostPreview
                key={post.slug}
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                zone={post.country}
                slug={`/overseas/${CountryRoute(post.country)}/${post.slug}`}
                excerpt={post.excerpt}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: COUNTRIES.map((country) => {
      return {
        params: {
          country,
        },
      };
    }),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<{
  posts: Items[];
  selectedCountry: string;
}> = async (props) => {
  const postsDirectory = join(process.cwd(), "_overseas");
  const allOverseasPosts = getAllPosts(postsDirectory, [
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
    "nearestMRT",
    "country",
  ]);

  const country = capitalize(props.params.country as string);
  return {
    props: {
      posts: allOverseasPosts.filter((post) => post.country.includes(country)),
      selectedCountry: country,
    },
  };
};
