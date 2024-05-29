import Cases from "../../components/Cases/Cases";
import Forms from "../../components/Forms/Forms";
import Header from "../../components/Header/Header";
import styles from "./CasesPage.module.scss";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { changePage } from "../../redux/slices/pageSlice";
import Footer from "../../components/Footer/Footer";

const CasesPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changePage("Кейсы"));
  });
  return (
    <div className={styles.cases_page}>
      <Header />
      <Cases />
      <Forms />
      <Footer />
    </div>
  );
};

export default CasesPage;
