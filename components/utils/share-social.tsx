import {
  TelegramShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import styles from "../post/post.module.css";
import FacebookIcon from "../icons/FacebookIcon";
import TelegramIcon from "../icons/TelegramIcon";
import TwitterIcon from "../icons/TwitterIcon";
import WhatsappIcon from "../icons/WhatsappIcon";

type Props = {
  id: string;
};

const ShareSocial = ({ id }: Props) => {
  return (
    <div className={styles["share-container"]}>
      <TelegramShareButton
        url={`http://audreythefoodie.com/posts/${id}`}
        title={"Check out this food review by AudreyTheFoodie!"}
      >
        <div className={styles["share-icon"]}>
          <TelegramIcon width={30} height="auto" className={styles["icon"]} />
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
      <TwitterShareButton
        url={`http://audreythefoodie.com/posts/${id}`}
        title={"Check out this food review by AudreyTheFoodie!"}
      >
        <div className={styles["share-icon"]}>
          <TwitterIcon width={20} height="auto" className={styles["icon"]} />
        </div>
      </TwitterShareButton>
      <WhatsappShareButton
        url={`http://audreythefoodie.com/posts/${id}`}
        title={"Check out this food review by AudreyTheFoodie!"}
      >
        <div className={styles["share-icon"]}>
          <WhatsappIcon width={30} height="auto" className={styles["icon"]} />
        </div>
      </WhatsappShareButton>
    </div>
  );
};

export default ShareSocial;
