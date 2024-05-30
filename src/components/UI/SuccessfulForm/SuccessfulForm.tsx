import { MdPlaylistAddCheckCircle } from "react-icons/md";
import styles from './SuccessfulForm.module.scss'

const SuccessfulForm: React.FC = (): JSX.Element => {
  return (
    <div className={styles.successful_form} >
      <MdPlaylistAddCheckCircle size={50} color="yellow"/>
      <p>Данные успешно переданы</p>
    </div>
  );
};

export default SuccessfulForm;
