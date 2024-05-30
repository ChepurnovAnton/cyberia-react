import Cases from "../../components/Cases/Cases";
import Forms from "../../components/Forms/Forms";
import styles from "./CasesPage.module.scss";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { changePage } from "../../redux/slices/pageSlice";


const CasesPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changePage("Кейсы"));
  });
  return (
    <div className={styles.cases_page}>
      <Cases />
      <Forms />
    </div>
  );
};

export default CasesPage;
