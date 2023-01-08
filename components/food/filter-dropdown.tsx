import React from "react";
import Select from "react-select";
import styles from "./food.module.css";

export default function FilterDropdown({ placeholder, sortOptions, onChange }) {
  return (
    <div className={styles["indiv-filter"]}>
      <Select
        placeholder={placeholder}
        options={sortOptions}
        onChange={onChange}
        isClearable={true}
      />
    </div>
  );
}
