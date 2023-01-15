import React, { useState } from "react";
import Container from "../../components/container";
import MoreOverseasStories from "../../components/overseas/overseas-more-stories";
import OverseasHeroPost from "../../components/overseas/overseas-hero-post";
import Intro from "../../components/intro";
import Layout from "../../components/layout";
import FilterDropdown from "../../components/food/filter-dropdown";
import {
  overseasOptions,
  tagsOptions,
} from "../../components/food/filter-options";
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

  const heroPost = filteredOverseasPosts[0];
  const morePosts = filteredOverseasPosts.slice(1);
  const newPosts = filteredOverseasPosts.slice(0, 5);
  const [selectedCountry, setSelectedCountry] = useState("France");

  return (
    <>
      <Layout>
        <Head>
          <title>AudreyTheFoodie</title>
        </Head>
        <Container>
          {/* <OverseasNav
            country={selectedCountry}
            onChange={setSelectedCountry}
          />
          <OverseasNewestPosts posts={newPosts} country={selectedCountry} /> */}
          {heroPost && (
            <OverseasHeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              zone={heroPost.country}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreOverseasStories posts={morePosts} />}
        </Container>
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
