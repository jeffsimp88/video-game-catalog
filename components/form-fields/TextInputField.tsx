import { ChangeEventHandler } from "react";

import styles from "../Form.module.css";

type TextProps = {
  title: string;
  name: string;
  handleFormChange: ChangeEventHandler;
};

export default function TextInputField({
  title,
  name,
  handleFormChange,
}: TextProps) {
  return (
    <>
      <label className={styles.textField}>
        {title}:
        <input
          type="input"
          name={name}
          onChange={handleFormChange}
          className={styles.input}
          required
        />
      </label>
    </>
  );
}
