import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./Projects.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useState, useEffect } from "react";

const Projects = () => {
  const projects = useSelector(
    (state: RootState) => state.projectsSlice.projects
  );

  const category = useSelector((state: RootState) => state.projectsSlice.activeCategory);

  const [filterProjects, setFilterData] = useState([]);

  const onFilterProjects = (id) => {
    const filter = projects.filter((item) =>
      item.categories.some((el) => el.id === id)
    );
    setFilterData(filter);
  };

  useEffect(() => {
    if (projects && projects.length > 0) {
      setFilterData(projects);
    }
  }, [projects]);

  useEffect(() => {
    onFilterProjects(category);
  }, [category]);

  return (
    <section className={styles.projects}>
      {
      filterProjects.map((project) => (
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
