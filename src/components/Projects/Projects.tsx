import ProjectCard from "../ProjectCard/ProjectCard";
import styles from "./Projects.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { useState, useEffect } from "react";
import { useGetCategoriesQuery } from "../../API/categories";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

interface IGeo {
  lat: string | null;
  lng: string | null;
}

interface ICategory {
  id: number;
  name: string;
}

interface IProject {
  categories: ICategory[];
  description: string;
  geo: IGeo;
  id: number;
  image: string;
  image_dark: string;
  project_url: string | null;
  slug: string;
  title: string;
}

const Projects: React.FC = (): JSX.Element | string => {
  const categoryId = useSelector(
    (state: RootState) => state.projectsSlice.activeCategory
  );

  const { data = [], error, isLoading } = useGetCategoriesQuery("projects");

  const [projectsData, setProjectsData] = useState<IProject[]>([]);
  const [filterProjects, setFilterData] = useState<IProject[]>([]);

  useEffect(() => {
    setFilterData(projectsData);
  }, [projectsData]);

  useEffect(() => {
    const getData = async () => {
      const projects = await data.items;
      setProjectsData(projects);
    };
    getData();
  }, [data.items]);

  useEffect(() => {
    const onFilterProjects = (id: number | null) => {
      const filter = projectsData.filter((item) =>
        item.categories.some((el) => el.id === id)
      );
      setFilterData(filter);
    };
    onFilterProjects(categoryId);
  }, [categoryId]);

  if (error) {
    return `${error.data.message}`;
  }

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
                description={project.description}
              />
            ))}
        </section>
      )}
    </>
  );
};

export default Projects;
