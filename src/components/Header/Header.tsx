import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import React from "react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { navigations } from "../../data/data";


const Header: React.FC = (): JSX.Element => {
  const [isOpenBurger, setIsOpenBurger] = useState<boolean>(false);

  return (
    <>
      <header className={styles.header}>
        <Link to="/cases">
          <img className={styles.logo} src="icon.svg" alt="icon" />
        </Link>
        <button
          className={styles.burger_menu}
          onClick={() => setIsOpenBurger(!isOpenBurger)}
          >
          <img src="public\Menu-burger.svg" alt="BurgerMenu" />
        </button>
        <nav className={styles.navigation_list}>
          {navigations.map((navElement) => (
            <Link
            key={navElement.title}
            to={navElement.pathName}
            className={styles.navigation_element}
            >
              {navElement.title}
            </Link>
          ))}
        </nav>
          {isOpenBurger && (
            <BurgerMenu
              setIsOpenBurger={setIsOpenBurger}
              navigations={navigations}
            />
          )}
      </header>
      <div className={styles.breadcrumbs}>
        <Breadcrumbs />
      </div>
    </>
  );
};

export default Header;
