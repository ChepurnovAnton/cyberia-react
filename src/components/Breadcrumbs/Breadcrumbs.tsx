import styles from "./Breadcrumbs.module.scss";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Breadcrumbs: React.FC<breadcrumbsProps> = (): JSX.Element => {
  const activePage = useSelector((state: RootState) => state.pageSlice.activePage);
  
  return (
    <nav>
      <div className={styles.breadcrumbs}>
        <div>Главная</div>
        <div>/</div>
        <div>{activePage}</div>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
