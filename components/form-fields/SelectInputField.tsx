import { ChangeEventHandler } from "react";
import styles from "../Form.module.css";
type SelectProps = {
  title: string;
  name: string;
  options: { label: string; value: string }[];
  handleChange: ChangeEventHandler;
};
export default function SelectInputField({
  title,
  name,
  options,
  handleChange,
}: SelectProps) {
  return (
    <>
      <label className={styles.textField}>
        {title}:
        <select
          name={name}
          onChange={handleChange}
          className={styles.select}
          required
        >
          <option value={""}>Select Console</option>
          {options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
    </>
  );
}
