import styles from "./Button.module.scss";

const Button = ({ value, className }) => {
  return (
    <input
      className = {`${className} , ${styles.button}`}
      type="submit"
      value={value}
    />
  );
};

export default Button;
