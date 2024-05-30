import styles from "./Checkbox.module.scss";
import { useState } from "react";

interface ICheckboxProps {
  children: string;
}

const Checkbox: React.FC<ICheckboxProps> = ({ children }):JSX.Element => {
  const [checked, setChecked] = useState(false);
  return (
    <label className={styles.checkbox_wripper}>
      <input type="checkbox"  className={styles.checkbox_element} />
      <span
        className={styles.custom_checkbox}
        onClick={() => setChecked(!checked)}
      ></span>
      {checked && (
        <span
          className={styles.custom_checkbox2}
          onClick={() => setChecked(!checked)}
        ></span>
      )}
      <p className={styles.text} onClick={() => setChecked(!checked)}>
        {children}
      </p>
    </label>
  );
};

export default Checkbox;
