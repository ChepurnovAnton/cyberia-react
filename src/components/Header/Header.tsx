import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const breadcrumbsData = [
    { pathName: "/agency", title: "Агенство" },
    { pathName: "/services", title: "Услуги" },
    { pathName: "/cases", title: "Кейсы" },
    { pathName: "/blog", title: "Блог" },
    { pathName: "/contacts", title: "Контакты" },
  ];

  return (
    <>
      <header className={styles.header}>
        <Link to="/cases">
          <img className={styles.logo} src="icon.svg" alt="icon" />
        </Link>
        <nav className={styles.navigation_list}>
          {breadcrumbsData.map((navElement) => (
            <Link
              to={navElement.pathName}
              className={styles.navigation_element}
            >
              {navElement.title}
            </Link>
          ))}
        </nav>
      </header>
      <Breadcrumbs
        style={{ marginTop: "65px", marginBottom: "130px" }}
        pathName={location.pathname}
        breadcrumbsData={breadcrumbsData}
      />
    </>
  );
};

export default Header;
