import Header from "./components/Header/Header";
import styles from "./App.module.scss";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import Cases from "./components/Cases/Cases";
function App() {
  return (
    <>
      <Header />
      <Breadcrumbs style={{ marginTop: "65px" }} />
      <Cases />
    </>
  );
}

export default App;
