import { Route, Routes } from "react-router-dom";
import styles from './App.module.scss'
import CasesPage from "./pages/CasesPage/CasesPage";
import Contacts from "./pages/OtherPages/Contacts";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Blog from "./pages/OtherPages/Contacts copy 2";
import Services from "./pages/OtherPages/Contacts copy 3";
import Agency from "./pages/OtherPages/Agency";

function App() {
  return (
    <>
      <div className={styles.wripper}>
      <Header/>
        <Routes>
          <Route path="/cases" element={<CasesPage />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/services" element={<Services />} />
          <Route path="/agency" element={<Agency />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
