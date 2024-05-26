import axios from "axios";
import styles from "./Cases.module.scss";
import { useState, useEffect } from "react";
import Categories from "../Categories/Categories";
import Projects from "../Projects/Projects";

const Cases = () => {
  const [categories, setCategories] = useState([]);

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
    <section className={styles.cases}>
      <h2 className={styles.title}>Кейсы</h2>
      <Categories categories={categories} />
      <Projects />
    </section>
  );
};

export default Cases;
