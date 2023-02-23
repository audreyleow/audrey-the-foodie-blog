import {
  TelegramShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import Link from "next/link";
import styles from "../post/post.module.css";
import FacebookIcon from "../icons/FacebookIcon";
import TelegramIcon from "../icons/TelegramIcon";
import TwitterIcon from "../icons/TwitterIcon";
import WhatsappIcon from "../icons/WhatsappIcon";
import InstagramIcon from "../icons/InstagramIcon";

type Props = {
  id: string;
  igLink: string;
};

const ShareSocial = ({ id, igLink }: Props) => {
  return (
    <div className={styles["share-container"]}>
      <TelegramShareButton
        url={`http://audreythefoodie.com/posts/${id}`}
        title={"Check out this food review by AudreyTheFoodie!"}
      >
        <div className={styles["share-icon"]}>
          <TelegramIcon width={30} height={30} className={styles["icon"]} />
        </div>
      </TelegramShareButton>
      <FacebookShareButton
        url={`http://audreythefoodie.com/posts/${id}`}
        title={"Check out this food review by AudreyTheFoodie!"}
      >
        <div className={styles["share-icon"]}>
          <FacebookIcon width={10} className={styles["icon"]} />
        </div>
      </FacebookShareButton>
      <Link href={igLink}>
        <div className={styles["share-icon"]}>
          <InstagramIcon width={30} height={30} className={styles["icon"]} />
        </div>
      </Link>
      <TwitterShareButton
        url={`http://audreythefoodie.com/posts/${id}`}
        title={"Check out this food review by AudreyTheFoodie!"}
      >
        <div className={styles["share-icon"]}>
          <TwitterIcon width={20} height={30} className={styles["icon"]} />
        </div>
      </TwitterShareButton>
      <WhatsappShareButton
        url={`http://audreythefoodie.com/posts/${id}`}
        title={"Check out this food review by AudreyTheFoodie!"}
      >
        <div className={styles["share-icon"]}>
          <WhatsappIcon width={30} height={30} className={styles["icon"]} />
        </div>
      </WhatsappShareButton>
    </div>
  );
};

export default ShareSocial;
