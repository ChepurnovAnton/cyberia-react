import styles from "./BurgerMenu.module.scss";
import { Link } from "react-router-dom";

interface INavigation {
  pathName: string;
  title: string;
}

type BugrerMenuProps = {
  navigations: INavigation[];
  setIsOpenBurger: any; // Не знаю как типизировать
};

const BurgerMenu: React.FC<BugrerMenuProps> = ({
  setIsOpenBurger,
  navigations,
}) => {
  return (
    <div className={styles.burger}>
      <button
        className={styles.close_button}
        onClick={() => setIsOpenBurger(false)}
      >
        <img src="public\Menu-burger-close.svg" alt="иконка закрытия меню" />
      </button>
      <ul className={styles.navigation_list}>
        {navigations.map((navElement) => (
          <li onClick={() => setIsOpenBurger(false)} key={navElement.title}>
            <Link to={navElement.pathName} className={styles.menu_element}>
              {navElement.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.contacts}>
        <h2>Контакты:</h2>
        <div>
          <a className={styles.phone} href="tel:+79991234567">+7 999 123 45 67</a>
          <p>hello@cyberia.studio</p>
          <p>ул.Ярных, д.35, оф.10</p>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
