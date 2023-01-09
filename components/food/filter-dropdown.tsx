import React from "react";
import Select from "react-select";
import styles from "./food.module.css";

export default function FilterDropdown({
  placeholder,
  sortOptions,
  onChange,
  className,
}: {
  placeholder: string;
  sortOptions: {
    value: string;
    label: string;
  }[];
  onChange: (choice: { value: string; label: string }) => void;
  className?: string;
}) {
  return (
    <div className={styles["indiv-filter"]}>
      <Select
        placeholder={placeholder}
        options={sortOptions}
        onChange={onChange}
        isClearable={true}
        className={className}
      />
    </div>
  );
}
