import styles from "./ProjectCard.module.scss";

const ProjectCard = ({ image, title, description }) => {
  return (
    <article className={styles.card}>
      <img className={styles.card_image} src={image} alt="проект" />
      <div className={styles.decsription}>
        <img
          src="public\element-project-card.svg"
          alt="элемент карточки проекта"
          width={25}
          height={25}
        />
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div className={styles.decsription_mobile}>
        <img
          src="public\element-project-card-mobile.svg"
          alt="элемент карточки проекта"
          width={25}
          height={25}
        />
        <h2 className={styles.title_mobile}>{title}</h2>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default ProjectCard;
