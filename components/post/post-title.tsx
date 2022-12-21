import { ReactNode } from "react";
import styles from "./post.module.css";

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return <h1 className={styles.title}>{children}</h1>;
};

export default PostTitle;
