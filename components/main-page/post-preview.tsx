import Region from "../region";
import DateFormatter from "../date-formatter";
import CoverImage from "../cover-image";
import Link from "next/link";
import styles from "./main-page.module.css";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  zone: string;
  slug: string;
  tags?: string[];
};

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  zone,
  slug,
  tags,
}: Props) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      {tags !== undefined && (
        <div className={styles["country-subheading"]}>{tags[0]}</div>
      )}
      <div className={styles["food-heading"]}>
        <Link href={slug} className="hover:underline">
          {title}
        </Link>
      </div>
      <div className={styles.date}>
        <DateFormatter dateString={date} />
      </div>
      <p className={styles.preview}>{excerpt}...</p>
      <Region zone={zone} />
    </div>
  );
};

export default PostPreview;
