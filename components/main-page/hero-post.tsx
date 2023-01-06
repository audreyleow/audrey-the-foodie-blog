import Region from "../region";
import DateFormatter from "../date-formatter";
import CoverImage from "../cover-image";
import Link from "next/link";
import { figtree } from "../utils/font";
import styles from "./main-page.module.css";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  zone: string;
  slug: string;
};

const HeroPost = ({ title, coverImage, date, excerpt, slug, zone }: Props) => {
  return (
    <section className={figtree.className}>
      <div className={styles["cover-image"]}>
        <CoverImage title={title} src={coverImage} slug={`/posts/${slug}`} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-12 md:mb-20">
        <div>
          <h3 className={styles["post-heading"]}>
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className={styles.preview}>{excerpt}...</p>
          <Region zone={zone} />
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
