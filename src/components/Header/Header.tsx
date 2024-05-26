import styles from "./Header.module.scss";

const navigations = ["Агенство", "Услуги", "Кейсы", "Блог", "Контакты"];

const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src="icon.svg" alt="icon" />
      <ul className={styles.navigation_list}>
        {navigations.map((navigationElement) => (
          <li key={navigationElement} className={styles.navigation_element}>
            <a>{navigationElement}</a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
