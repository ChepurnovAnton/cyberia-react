import styles from "./Button.module.scss";

interface IButtonProps {
  value:string;
  className: string;
}

const Button: React.FC<IButtonProps> = ({ value, className }) => {
  return (
    <input
      className = {`${className} , ${styles.button}`}
      type="submit"
      value={value}
    />
  );
};

export default Button;
