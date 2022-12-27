import Region from "../Region";
import DateFormatter from "../date-formatter";
import CoverImage from "../cover-image";
import PostTitle from "./post-title";
import ShareSocial from "../utils/share-social";
import styles from "./post.module.css";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  zone: string;
  nearestMRT: string;
  slug: string;
};

const PostHeader = ({
  title,
  coverImage,
  date,
  zone,
  nearestMRT,
  slug,
}: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className={styles.general}>
        {/* <div className="">
          <Region zone={zone} />
        </div> */}
        <div className={styles.temp}>
          <DateFormatter dateString={date} />
          <Region zone={zone} />
        </div>
        <div>
          <ShareSocial id={slug} />
        </div>
      </div>
      <div className="mb-8 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
    </>
  );
};

export default PostHeader;
