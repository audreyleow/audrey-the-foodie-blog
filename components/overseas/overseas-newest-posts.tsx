import { useState, useEffect } from "react";
import PostPreview from "../main-page/post-preview";
import type OverseasPost from "../../interfaces/overseasPost";
import styles from "./overseas.module.css";

type Props = {
  posts: OverseasPost[];
  country: string;
};

const OverseasNewestPosts = ({ posts, country }: Props) => {
  console.log(posts);
  const [filteredOverseasPosts, setFilteredOverseasPosts] = useState(posts);

  useEffect(() => {
    let newFilteredOverseasPosts = posts.filter((post) =>
      post.country.includes(country)
    );
    setFilteredOverseasPosts(newFilteredOverseasPosts);
  }, [country]);
  return (
    <section>
      <h2 className={styles["more-reviews"]}>{country}</h2>
      <div></div>
    </section>
  );
};

export default OverseasNewestPosts;
