import styles from "./overseas.module.css";

type Props = {
  country: string;
};

const OverseasNewestPosts = ({ country }: Props) => {
  return (
    <section>
      <h2 className={styles["country-heading"]}>{country}</h2>
    </section>
  );
};

export default OverseasNewestPosts;
