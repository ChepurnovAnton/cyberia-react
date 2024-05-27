import styles from "./Categories.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeCategory } from "../../redux/slices/projectsSlice";
import { useGetCategoriesQuery } from "../../API/categories";

const Categories = () => {
  const dispacth = useDispatch();

  const {
    data = [],
    error,
    isLoading,
  } = useGetCategoriesQuery("project-categories");

  const [activeCategory, setActiveCategory] = useState();

  const handleChangeCategory = (id) => {
    setActiveCategory(id);
    dispacth(changeCategory(id));
  };

  if (isLoading) return null;

  const categories = data.items;

  if (error) {
    return `${error.error}`;
  }

  return (
    <ul className={styles.categories_list}>
      {categories &&
        categories.map((category) => (
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
