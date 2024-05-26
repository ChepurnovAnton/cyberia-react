import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./Projects.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useState, useEffect } from "react";

const Projects = () => {
  const projects = useSelector(
    (state: RootState) => state.projectsSlice.projects
  );

  const category = useSelector((state) => state.projectsSlice.activeCategory);

  const [filterData, setFilterData] = useState([]);

  const onFilterData = (id) => {
    const a = projects.filter((item) =>
      item.categories.some((el) => el.id === id)
    );
    setFilterData(a);
  };

  useEffect(() => {
    if (projects && projects.length > 0) {
      setFilterData(projects);
    }
  }, [projects]);

  useEffect(() => {
    onFilterData(category);
  }, [category]);

  return (
    <section className={styles.projects}>
      {filterData &&
        filterData.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
          />
        ))}
    </section>
  );
};

export default Projects;
