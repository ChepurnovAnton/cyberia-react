import axios from "axios";
import styles from "./Cases.module.scss";
import { useState, useEffect } from "react";

const Cases = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCAtegory] = useState();

  useEffect(() => {
    const getCategories = async () => {
      const result = await axios(
        "https://api.test.cyberia.studio/api/v1/project-categories"
      );
      setCategories(result.data.items);
    };
    getCategories();
  }, []);

  return (
    <>
      <h2 className={styles.title}>Кейсы</h2>
      <ul className={styles.categories_list}>
        {categories.map((category) => (
          <li key={category.id}>
            <button
              className={
                activeCategory === category.id
                  ? styles.active
                  : styles.category
              }
              onClick={() => setActiveCAtegory(category.id)}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cases;
