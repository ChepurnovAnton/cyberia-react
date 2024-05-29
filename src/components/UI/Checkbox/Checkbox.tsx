import styles from "./Checkbox.module.scss";
import { useState } from "react";

const Checkbox = ({ children }) => {
  const [checked, setChecked] = useState(false);
  return (
    <label className={styles.checkbox_wripper}>
      <input type="checkbox" className={styles.checkbox_element} />
      <span className={styles.custom_checkbox}></span>
      {checked && <span className={styles.custom_checkbox2}></span>}
      <p className={styles.text} onClick={() => setChecked(!checked)}>
        {children}
      </p>
    </label>
  );
};

export default Checkbox;
