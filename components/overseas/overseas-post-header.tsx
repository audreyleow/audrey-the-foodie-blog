import Country from "./country";
import DateFormatter from "../date-formatter";
import CoverImage from "../cover-image";
import PostTitle from "../post/post-title";
import ShareSocial from "../utils/share-social";
import styles from "./overseas.module.css";

type Props = {
  title: string;
  coverImage: string;
  igLink: string;
  date: string;
  country: string;
  nearestMRT: string;
  slug: string;
};

const OverseasPostHeader = ({
  title,
  coverImage,
  igLink,
  date,
  country,
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
          <Country country={country} />
        </div>
        <div>
          <ShareSocial id={slug} igLink={igLink} />
        </div>
      </div>
      <div className="mb-6 sm:mx-0 text-xl">
        <CoverImage title={title} src={coverImage} />
      </div>
    </>
  );
};

export default OverseasPostHeader;
