import axios from "axios";
import styles from "./Cases.module.scss";
import { useState, useEffect } from "react";
import Categories from "../Categories/Categories";
import Projects from "../Projects/Projects";
import { useDispatch } from "react-redux";
import { getCategories } from "../../redux/slices/categoriesSlice";

const Cases = () => {
  const [categories, setCategories] = useState([]);
  const [projects, setProjects] = useState([]);

  const dispacth = useDispatch();
  dispacth(getCategories(categories));

  useEffect(() => {
    const getCategories = async () => {
      const result = await axios(
        "https://api.test.cyberia.studio/api/v1/project-categories"
      );
      setCategories(result.data.items);
    };
    getCategories();
  }, []);

  useEffect(() => {
    const getProjects = async () => {
      const result = await axios(
        "https://api.test.cyberia.studio/api/v1/projects"
      );
      setProjects(result.data.items);
    };
    getProjects();
  }, []);

  return (
    <section className={styles.cases}>
      <h2 className={styles.title}>Кейсы</h2>
      <Categories/>
      <Projects projects={projects} />
    </section>
  );
};

export default Cases;
