import SmallPost from "./small-post";
import LargePost from "./large-post";
import CountryRoute from "../utils/country-route";
import Link from "next/link";
import styles from "./main-page.module.css";

type Props = {
  posts: {
    title: string;
    coverImage: string;
    date: string;
    excerpt: string;
    slug: string;
    country?: string;
    tags?: string[];
  }[];
  heading: string;
  route: string;
};

const MainOverseasSegment = ({ posts, heading, route }: Props) => {
  const largePost = posts[0];
  const smallPosts = posts.slice(1, 3);
  const lastPost = posts[3];
  return (
    <div>
      <h2 className={styles["more-reviews"]}>{heading}</h2>
      <div className={styles["post-container"]}>
        <LargePost
          title={largePost.title}
          coverImage={largePost.coverImage}
          slug={`${route}/${CountryRoute(largePost.country)}/${
            largePost.slug
          }`}
          excerpt={largePost.excerpt}
          country={largePost.country}
          tags={largePost.tags}
        />
        <div className={styles["small-posts"]}>
          {smallPosts.map((post) => (
            <div key={post.slug} className={styles["indiv-small-post"]}>
              <SmallPost
                title={post.title}
                slug={`${route}/${CountryRoute(post.country)}/${post.slug}`}
                excerpt={post.excerpt}
                country={post.country}
                someTags={post.tags}
              />
            </div>
          ))}
          <div>
            <SmallPost
              title={lastPost.title}
              slug={`${route}/${CountryRoute(lastPost.country)}/${
                lastPost.slug
              }`}
              excerpt={lastPost.excerpt}
              country={lastPost.country}
              someTags={lastPost.tags}
            />
          </div>
          <Link href={route}>
            <div className={styles["view-all"]}>
              View All
              <span className={styles["right-arrow"]} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainOverseasSegment;
