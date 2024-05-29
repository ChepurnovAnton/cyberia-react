import styles from "./Categories.module.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCategory } from "../../redux/slices/projectsSlice";
import { useGetCategoriesQuery } from "../../API/categories";
import { RootState } from "../../redux/store";

interface ICategory {
  id: number;
  name: string;
}

const Categories: React.FC = () => {
  const dispacth = useDispatch();
  const activeCategory = useSelector(
    (state: RootState) => state.projectsSlice.activeCategory
  );
  const {
    data = [],
    error,
    isLoading,
  } = useGetCategoriesQuery("project-categories");

  const handleChangeCategory = (id: number) => {
    dispacth(changeCategory(id));
  };

  if (isLoading) return null;

  const categories: ICategory[] = data.items;

  if (error) {
    return `${error.data.message}`;
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
