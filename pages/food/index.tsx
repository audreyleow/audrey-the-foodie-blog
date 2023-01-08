import { useState, useEffect } from "react";
import PostPreview from "../../components/main-page/post-preview";
import Intro from "../../components/intro";
import Layout from "../../components/layout";
import FilterDropdown from "../../components/food/filter-dropdown";
import { getAllPosts } from "../../lib/api";
import Head from "next/head";
import Post from "../../interfaces/post";
import {
  zoneOptions,
  ratingOptions,
  mrtOptions,
  overseasOptions,
} from "../../components/food/filter-options";
import { join } from "path";
import styles from "../../components/food/food.module.css";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  console.log(allPosts);
  const [filteredPosts, setFilteredPosts] = useState(allPosts);
  const [selectedZone, setSelectedZone] = useState<{
    label: string;
    value: string;
  }>(null);
  const [selectedRating, setSelectedRating] = useState<{
    label: string;
    value: string;
  }>(null);
  const [selectedMRT, setSelectedMRT] = useState<{
    label: string;
    value: string;
  }>(null);

  useEffect(() => {
    let newFilteredPosts = allPosts.filter(
      (post) =>
        (selectedZone === null || post.zone === selectedZone.value) &&
        (selectedRating === null || post.rating === selectedRating.value) &&
        (selectedMRT === null || post.nearestMRT === selectedMRT.value)
    );
    setFilteredPosts(newFilteredPosts);
  }, [selectedZone, selectedRating, selectedMRT]);

  return (
    <>
      <Layout>
        <Head>
          <title>AudreyTheFoodie</title>
        </Head>
        <div>
          <Intro text={`Looking for something specific?`} />
          <div className={styles["filter-container"]}>
            <div className={styles["filter-by"]}>Filter by:</div>
            <div className={styles["filter-mobile"]}>
              <FilterDropdown
                placeholder={`Zone`}
                sortOptions={zoneOptions}
                onChange={(choice) => setSelectedZone(choice)}
              />
              <FilterDropdown
                placeholder={`Rating`}
                sortOptions={ratingOptions}
                onChange={(choice) => setSelectedRating(choice)}
              />
              <FilterDropdown
                placeholder={`Nearest MRT Station`}
                sortOptions={mrtOptions}
                onChange={(choice) => setSelectedMRT(choice)}
              />
              {/* <FilterDropdown
              placeholder={`Country`}
              sortOptions={overseasOptions}
            /> */}
            </div>
          </div>
          <div className={styles["food-container"]}>
            <div className={styles["main-reviews"]}>
              {filteredPosts.map((post) => (
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
    "rating",
  ]);

  return {
    props: { allPosts },
  };
};
