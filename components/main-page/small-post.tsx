import Link from "next/link";
import styles from "./main-page.module.css";

type Props = {
  title: string;
  excerpt: string;
  slug: string;
  country?: string;
  someTags?: string[];
};

const SmallPost = ({ title, excerpt, slug, country, someTags }: Props) => {
  return (
    <div>
      {country === undefined && (
        <div className={styles["country-subheading"]}>{someTags[0]}</div>
      )}
      {country !== undefined && (
        <div className={styles["country-subheading"]}>{country}</div>
      )}
      <div className={styles["food-heading"]}>
        <Link href={slug} className="hover:underline">
          {title}
        </Link>
      </div>
      <p className={styles.preview}>{excerpt}...</p>
    </div>
  );
};

export default SmallPost;
