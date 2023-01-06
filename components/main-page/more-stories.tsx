import PostPreview from "./post-preview";
import type Post from "../../interfaces/post";
import styles from "./main-page.module.css";

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      <h2 className={styles["more-reviews"]}>More Reviews</h2>
      <div className={styles["main-reviews"]}>
        {posts.map((post) => (
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
    </section>
  );
};

export default MoreStories;
