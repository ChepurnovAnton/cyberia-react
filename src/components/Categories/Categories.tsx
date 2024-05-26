import styles from "./Categories.module.scss";
import { useState } from "react";
import type { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { changeCategory } from "../../redux/slices/projectsSlice";

const Categories = () => {
  const dispacth = useDispatch();

  const [activeCategory, setActiveCategory] = useState();
  const categories = useSelector(
    (state: RootState) => state.categoriesSlice.categories
  );

  const handleChangeCategory = (id) => {
    setActiveCategory(id);
    dispacth(changeCategory(id));
  };

  return (
    <ul className={styles.categories_list}>
      {categories.map((category) => (
        <li key={category.id}>
          <button
            className={
              activeCategory === category.id ? styles.active : styles.category
            }
            onClick={() => handleChangeCategory(category.id)}
          >
            {category.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
