import Image from "next/image";
import Link from "next/link";
import styles from "./overseas.module.css";

const OverseasNav = ({ country }: { country: string }) => {
  return (
    <div className={styles["overseas-nav"]}>
      <div className={styles["countries-heading"]}>
        Countries
        <Image
          src={`/assets/overseas/divider.png`}
          width={125}
          height={30}
          alt="divider"
        />
      </div>
      <div className={styles["full-countries"]}>
        <div
          className={`${styles.country} ${
            country === "All" && styles["selected-country"]
          }`}
        >
          <Link href="/overseas">All</Link>
        </div>
        <div
          className={`${styles.country} ${
            country === "France" && styles["selected-country"]
          }`}
        >
          <Link href="/overseas/france">France</Link>
        </div>
        <div
          className={`${styles.country} ${
            country === "Germany" && styles["selected-country"]
          }`}
        >
          <Link href="/overseas/germany">Germany</Link>
        </div>
        <div
          className={`${styles.country} ${
            country === "Italy" && styles["selected-country"]
          }`}
        >
          <Link href="/overseas/italy">Italy</Link>
        </div>
        <div
          className={`${styles.country} ${
            country === "Malaysia" && styles["selected-country"]
          }`}
        >
          <Link href="/overseas/malaysia">Malaysia</Link>
        </div>
        <div
          className={`${styles["last-country"]} ${
            country === "Vietnam" && styles["selected-country"]
          }`}
        >
          <Link href="/overseas/vietnam">Vietnam</Link>
        </div>
      </div>
    </div>
  );
};

export default OverseasNav;
