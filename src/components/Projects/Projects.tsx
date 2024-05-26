import ProjectCard from "../ProjectCard/ProjectCard";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from './Projects.module.scss'

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const getProjects = async () => {
      const result = await axios(
        "https://api.test.cyberia.studio/api/v1/projects"
      );
      setProjects(result.data.items);
    };
    getProjects();
  }, []);

  console.log(projects);

  return (
    <section className={styles.projects}>
      {projects.map((project) => (
        <ProjectCard image={project.image} title = {project.title} />
      ))}
    </section>
  );
};

export default Projects;
