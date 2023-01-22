import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import PostPreview from "../../components/main-page/post-preview";
import OverseasNav from "../../components/overseas/overseas-nav";
import OverseasNewestPosts from "../../components/overseas/overseas-newest-posts";
import styles from "../../components/food/food.module.css";
import Head from "next/head";
import OverseasPost from "../../interfaces/overseasPost";
import { join } from "path";
import { getAllPosts, Items } from "../../lib/api";
import CountryRoute from "../../components/utils/country-route";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";

const COUNTRIES = ["All", "France", "Germany", "Italy", "Malaysia", "Vietnam"];

type Props = {
  allOverseasPosts: OverseasPost[];
};

export default function Index({ allOverseasPosts }: Props) {
  const router = useRouter();
  const [filteredOverseasPosts, setFilteredOverseasPosts] =
    useState(allOverseasPosts);
  return (
    <Layout>
      <Head>
        <title>AudreyTheFoodie</title>
      </Head>
      <div className={styles["overseas-container"]}>
        <OverseasNav country="All" />
        <OverseasNewestPosts country="All" />
        <div className={styles["food-container"]}>
          <div className={styles["main-reviews"]}>
            {filteredOverseasPosts.map((post) => (
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

export const getStaticProps: GetStaticProps<{
  allOverseasPosts: Items[];
}> = async () => {
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
