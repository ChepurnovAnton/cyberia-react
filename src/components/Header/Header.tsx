import styles from "./Header.module.scss";

const navigations = ["Агенство", "Услуги", "Кейсы", "Блог", "Контакты"];

const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src="icon.svg" alt="icon" />
      <nav className={styles.navigation_list}>
        {navigations.map((navigationElement) => (
          <a key={navigationElement} className={styles.navigation_element}>
            {navigationElement}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
