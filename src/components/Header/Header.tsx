import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img className={styles.logo} src="icon.svg" alt="icon" />
      </Link>
      <nav className={styles.navigation_list}>
        <Link to="/contacts" className={styles.navigation_element}>Контакты</Link>
        <Link to="/services" className={styles.navigation_element}>Услуги</Link>
      </nav>
    </header>
  );
};

export default Header;
