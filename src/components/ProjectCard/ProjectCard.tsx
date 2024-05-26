import styles from "./ProjectCard.module.scss";

const ProjectCard = ({ image, title }) => {
  return (
    <article className={styles.card}>
      <img className={styles.card_image} src={image} alt="проект" />
      <div className={styles.title}>
        <img src="public\element-project-card.svg" alt="элемент карточки проекта" width={25} height={25} />
        <span>{title}</span>
      </div>
    </article>
  );
};

export default ProjectCard;
