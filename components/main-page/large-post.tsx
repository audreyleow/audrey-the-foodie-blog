import CoverImage from "../cover-image";
import SmallPost from "./small-post";
import styles from "./main-page.module.css";

type Props = {
  title: string;
  coverImage: string;
  excerpt: string;
  slug: string;
  country?: string;
  tags?: string[];
};

const LargePost = ({
  title,
  coverImage,
  excerpt,
  slug,
  country,
  tags,
}: Props) => {
  return (
    <div className={styles["large-post"]}>
      <div>
        <div className="mb-5">
          <CoverImage slug={slug} title={title} src={coverImage} />
        </div>
        <SmallPost
          title={title}
          slug={slug}
          excerpt={excerpt}
          country={country}
          someTags={tags}
        />
      </div>
    </div>
  );
};

export default LargePost;
