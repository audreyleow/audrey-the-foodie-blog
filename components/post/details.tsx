import styles from "./post.module.css";
import qs from "qs";

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
      <div style={{ display: "flex", margin: "0px -20px -20px" }}>
        <iframe
          width="100%"
          height="350"
          className="border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=${
            process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
          }&${qs.stringify({
            q: location,
          })}`}
        />
      </div>
    </div>
  );
};

export default Details;
