import PostPreview from "../main-page/post-preview";
import type OverseasPost from "../../interfaces/overseasPost";
import styles from "./overseas.module.css";

type Props = {
  posts: OverseasPost[];
};

const MoreOverseasStories = ({ posts }: Props) => {
  return (
    <section>
      <h2 className={styles["more-reviews"]}>More Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            zone={post.country}
            slug={post.slug}
            excerpt={post.excerpt}
            nearestMRT={post.nearestMRT}
            location={post.location}
            rating={post.rating}
            collab={post.collab}
          />
        ))}
      </div>
    </section>
  );
};

export default MoreOverseasStories;
