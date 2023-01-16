import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import PostPreview from "../../components/main-page/post-preview";
import OverseasNav from "../../components/overseas/overseas-nav";
import OverseasNewestPosts from "../../components/overseas/overseas-newest-posts";
import styles from "../../components/food/food.module.css";
import Head from "next/head";
import OverseasPost from "../../interfaces/overseasPost";
import { join } from "path";
import { getAllPosts } from "../../lib/api";

type Props = {
  allOverseasPosts: OverseasPost[];
};

export default function Index({ allOverseasPosts }: Props) {
  console.log(allOverseasPosts);
  const [filteredOverseasPosts, setFilteredOverseasPosts] =
    useState(allOverseasPosts);

  const newPosts = filteredOverseasPosts.slice(0, 5);
  const [selectedCountry, setSelectedCountry] = useState("France");

  useEffect(() => {
    let newFilteredOverseasPosts = allOverseasPosts.filter((post) =>
      post.country.includes(selectedCountry)
    );
    setFilteredOverseasPosts(newFilteredOverseasPosts);
  }, [selectedCountry]);

  return (
    <>
      <Layout>
        <Head>
          <title>AudreyTheFoodie</title>
        </Head>
        <div className={styles["overseas-container"]}>
          <OverseasNav
            country={selectedCountry}
            onChange={setSelectedCountry}
          />
          <OverseasNewestPosts country={selectedCountry} />
          <div className={styles["food-container"]}>
            <div className={styles["main-reviews"]}>
              {filteredOverseasPosts.map((post) => (
                <PostPreview
                  key={post.slug}
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  zone={post.country}
                  slug={`/overseas/${post.slug}`}
                  excerpt={post.excerpt}
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

  return {
    props: { allOverseasPosts },
  };
};
