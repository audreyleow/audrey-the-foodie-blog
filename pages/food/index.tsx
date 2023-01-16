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
  tagsOptions,
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
  const [selectedTag, setSelectedTag] = useState<{
    label: string;
    value: string;
  }>(null);

  useEffect(() => {
    let newFilteredPosts = allPosts.filter(
      (post) =>
        (selectedZone === null || post.zone === selectedZone.value) &&
        (selectedRating === null || post.rating === selectedRating.value) &&
        (selectedMRT === null || post.nearestMRT === selectedMRT.value) &&
        (selectedTag === null || post.tags.includes(selectedTag.value))
    );
    setFilteredPosts(newFilteredPosts);
  }, [selectedZone, selectedRating, selectedMRT, selectedTag]);

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
                className={styles["zone-dropdown"]}
              />
              <FilterDropdown
                placeholder={`Rating`}
                sortOptions={ratingOptions}
                onChange={(choice) => setSelectedRating(choice)}
                className={styles["rating-dropdown"]}
              />
              <FilterDropdown
                placeholder={`Nearest MRT Station`}
                sortOptions={mrtOptions}
                onChange={(choice) => setSelectedMRT(choice)}
                className={styles["mrt-dropdown"]}
              />
              <FilterDropdown
                placeholder={`Tags`}
                sortOptions={tagsOptions}
                onChange={(choice) => setSelectedTag(choice)}
                className={styles["tags-dropdown"]}
              />
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
                  tags={post.tags}
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
    "tags",
  ]);

  return {
    props: { allPosts },
  };
};
