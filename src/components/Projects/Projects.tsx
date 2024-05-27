import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./Projects.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useState, useEffect } from "react";
import { useGetCategoriesQuery } from "../../API/categories";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Projects = () => {
  const { data = [], error, isLoading } = useGetCategoriesQuery("projects");
  const [filterProjects, setFilterData] = useState([]);
  
  const categoryId = useSelector(
    (state: RootState) => state.projectsSlice.activeCategory
  );
  
  useEffect(() => {
    const getData = async () => {
      const projects = await data.items;
      setFilterData(projects);
    };
    
    getData();
  }, [data.items]);
  

  const onFilterProjects = (id) => {
    const filter = filterProjects.filter((item) =>
      item.categories.some((el) => el.id === id)
    );
    setFilterData(filter);
    console.log(filter);
  };

  useEffect(() => {
    onFilterProjects(categoryId);
  }, [categoryId]);

  return (
    <>
      {isLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
        <section className={styles.projects}>
          {filterProjects &&
            filterProjects.map((project) => (
              <ProjectCard
                key={project.id}
                image={project.image}
                title={project.title}
              />
            ))}
        </section>
      )}
    </>
  );
};

export default Projects;
