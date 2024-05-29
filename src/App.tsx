import { Route, Routes } from "react-router-dom";
import CasesPage from "./pages/CasesPage/CasesPage";
import Contacts from "./pages/Contacts/Contacts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/cases" element={<CasesPage />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;
