
import styles from "./Categories.module.scss";
import { useState } from "react";

const Categories = ({ categories }) => {
  const [activeCategory, setActiveCAtegory] = useState();
  return (
    <ul className={styles.categories_list}>
      {categories.map((category) => (
        <li key={category.id}>
          <button
            className={
              activeCategory === category.id ? styles.active : styles.category
            }
            onClick={() => setActiveCAtegory(category.id)}
          >
            {category.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
