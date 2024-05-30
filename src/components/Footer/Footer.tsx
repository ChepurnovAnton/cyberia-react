import styles from "./Footer.module.scss";
import { navigations } from "../../data/data";
import { Link } from "react-router-dom";

const Footer: React.FC = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wripper}>
        <div className={styles.logo}>
          <img src="public/icon.svg" alt="logo" />
          <h2 className={styles.title}>Веб-разработка и усиление IT-команд</h2>
        </div>
        <div className={styles.contacts}>
          <a className={styles.phone} href="tel:+79991234567">
            +7 999 123 45 67
          </a>
          <p>hello@cyberia.studio</p>
          <p>ул.Ярных, д.35, оф.10</p>
        </div>
        <nav>
          <ul className={styles.nav_list}>
            {navigations.map((navigationElement) => (
              <li key={navigationElement.title} className={styles.nav_element}>
                <Link to={navigationElement.pathName}>
                  {navigationElement.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
