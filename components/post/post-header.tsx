import Avatar from "../avatar";
import DateFormatter from "../date-formatter";
import CoverImage from "../cover-image";
import PostTitle from "./post-title";
import styles from "./post.module.css";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  zone: string;
  nearestMRT: string;
};

const PostHeader = ({ title, coverImage, date, zone, nearestMRT }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className={styles.general}>
        <div className="">
          <Avatar zone={zone} />
        </div>
        <div>
          <DateFormatter dateString={date} />
        </div>
      </div>
      <div className="mb-8 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
    </>
  );
};

export default PostHeader;