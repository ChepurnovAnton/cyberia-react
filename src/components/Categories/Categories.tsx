import styles from "./Categories.module.scss";
import { useState } from "react";
import type { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

const Categories = () => {
  const [activeCategory, setActiveCAtegory] = useState("Продвижение");
  const categories = useSelector(
    (state: RootState) => state.categoriesSlice.categories
  );
  return (
    <ul className={styles.categories_list}>
      {categories.map((category) => (
        <li key={category.id}>
          <button
            className={
              activeCategory === category.name ? styles.active : styles.category
            }
            onClick={() => setActiveCAtegory(category.name)}
          >
            {category.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
