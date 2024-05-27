import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Contacts from "./pages/Contacts/Contacts";
import Header from "./components/Header/Header";
import Services from "./pages/Services/Services";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}

export default App;
