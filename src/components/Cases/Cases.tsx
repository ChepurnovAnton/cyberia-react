import React from "react";
import styles from "./Cases.module.scss";
import Categories from "../Categories/Categories";
import Projects from "../Projects/Projects";

const Cases: React.FC = () => {
  return (
    <section className={styles.cases}>
      <h2 className={styles.title}>Кейсы</h2>
      <Categories />
      <Projects />
    </section>
  );
};

export default Cases;
