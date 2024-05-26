import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./Projects.module.scss";

const Projects = ({projects}) => {

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
