import Link from "next/link";
import { figtree } from "../utils/font";
import styles from "./overseas.module.css";

const OverseasNav = ({
  country,
  onChange,
}: {
  country: string;
  onChange: (choice: string) => void;
}) => {
  return (
    <div className={styles["overseas-nav"]}>
      <div
        className={`${styles.country} ${
          country === "France" && styles["selected-country"]
        }`}
        onClick={() => {
          onChange("France");
        }}
      >
        France
      </div>
      <div
        className={`${styles.country} ${
          country === "Germany" && styles["selected-country"]
        }`}
        onClick={() => {
          onChange("Germany");
        }}
      >
        Germany
      </div>
      <div
        className={`${styles.country} ${
          country === "Italy" && styles["selected-country"]
        }`}
        onClick={() => {
          onChange("Italy");
        }}
      >
        Italy
      </div>
      <div
        className={`${styles.country} ${
          country === "Malaysia" && styles["selected-country"]
        }`}
        onClick={() => {
          onChange("Malaysia");
        }}
      >
        Malaysia
      </div>
      <div
        className={`${styles["last-country"]} ${
          country === "Vietnam" && styles["selected-country"]
        }`}
        onClick={() => {
          onChange("Vietnam");
        }}
      >
        Vietnam
      </div>
    </div>
  );
};

export default OverseasNav;
