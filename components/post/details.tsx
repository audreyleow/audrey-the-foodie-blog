import styles from "./post.module.css";

type Props = {
  title: string;
  nearestMRT: string;
  location: string;
  rating: string;
  collab: boolean;
  hours: string;
};

const Details = ({
  title,
  nearestMRT,
  location,
  rating,
  collab,
  hours,
}: Props) => {
  const disclaimer = collab && (
    <em>Disclaimer: This was an invited tasting.</em>
  );
  return (
    <div className={styles.details}>
      <div className={styles["details-heading"]}>Review Details:</div>
      <div>Restaurant: {title}</div>
      <div>Nearest MRT Station: {nearestMRT}</div>
      <div>Operating Hours: {hours}</div>
      <div>Location: {location}</div>
      <div>Rating: {rating}</div>
      <br />
      <div>{disclaimer}</div>
    </div>
  );
};

export default Details;
