import styles from "../post/post.module.css";
import FacebookIcon from "../icons/FacebookIcon";
import TelegramIcon from "../icons/TelegramIcon";
import TwitterIcon from "../icons/TwitterIcon";
import PinterestIcon from "../icons/PinterestIcon";

const ShareSocial = () => {
  return (
    <div className={styles["share-container"]}>
      <div className={styles["share-icon"]}>
        <TelegramIcon width={40} height="auto" className={styles["icon"]} />
      </div>
      <div className={styles["share-icon"]}>
        <FacebookIcon width={20} className={styles["icon"]} />
      </div>
      <div className={styles["share-icon"]}>
        <TwitterIcon width={30} height="auto" className={styles["icon"]} />
      </div>
      <div className={styles["share-icon"]}>
        <PinterestIcon width={30} height="auto" className={styles["icon"]} />
      </div>
    </div>
  );
};

export default ShareSocial;
