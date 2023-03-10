import Region from "../region";
import DateFormatter from "../date-formatter";
import CoverImage from "../cover-image";
import PostTitle from "./post-title";
import ShareSocial from "../utils/share-social";
import styles from "./post.module.css";

type Props = {
  title: string;
  coverImage: string;
  igLink: string;
  date: string;
  zone: string;
  slug: string;
};

const PostHeader = ({
  title,
  coverImage,
  igLink,
  date,
  zone,
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
          <ShareSocial id={slug} igLink={igLink} />
        </div>
      </div>
      <div className="mb-6 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
    </>
  );
};

export default PostHeader;
