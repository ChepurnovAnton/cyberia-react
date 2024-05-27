import styles from "./Breadcrumbs.module.scss";

const Breadcrumbs = ({ breadcrumbsData, pathName, ...props }) => {
  return (
    <nav {...props}>
      <div className={styles.breadcrumbs}>
        <div>Главная</div>
        <div>/</div>
        <div>
          {breadcrumbsData.map((item) =>
            item.pathName === pathName ? item.title : null
          )}
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
