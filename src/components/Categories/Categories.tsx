import styles from "./Categories.module.scss";
import { useState } from "react";
import type { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";

const Categories = () => {
  const dispacth = useDispatch();
  
  const [activeCategory, setActiveCategory] = useState("Продвижение");
  const categories = useSelector(
    (state: RootState) => state.categoriesSlice.categories
  );

  const changeCategory = (name) => {
    setActiveCategory(name);
  };
  return (
    <ul className={styles.categories_list}>
      {categories.map((category) => (
        <li key={category.id}>
          <button
            className={
              activeCategory === category.name ? styles.active : styles.category
            }
            onClick={() => changeCategory(category.name)}
          >
            {category.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
