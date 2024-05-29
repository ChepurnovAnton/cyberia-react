import Header from "../../components/Header/Header";
import styles from "./Contacts.module.scss";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { changePage } from "../../redux/slices/pageSlice";

const Contacts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changePage("Контакты"));
  });

  return (
    <div className={styles.contacts}>
      <Header />
      <div>Контакты</div>
    </div>
  );
};

export default Contacts;
