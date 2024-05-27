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

  if (error) {
    throw error;
  }

  const categoryId = useSelector(
    (state: RootState) => state.projectsSlice.activeCategory
  );

  const [filterProjects, setFilterData] = useState([]);

  useEffect(() => {
    setFilterData(data.items);
  }, [data]);

  const onFilterProjects = async (id) => {
    const filter = await data.items.filter((item) =>
      item.categories.some((el) => el.id === id)
    );
    setFilterData(filter);
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
