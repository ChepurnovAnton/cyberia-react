import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./Projects.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const Projects = () => {
  const projects = useSelector(
    (state: RootState) => state.projectsSlice.projects
  );

  return (
    <section className={styles.projects}>
      {projects.map((project) => (
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
