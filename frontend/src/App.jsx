import { Routes, Route } from "react-router-dom";
import BuffetReservations from "./components/BuffetReservations";
import MakeReservation from "./components/MakeReservation/MakeReservation";
import BuffetAdminPages from "./components/BuffetAdminPages";
import Addbuffet from "./components/AddBuffet/Addbuffet";
import AdminPanel from "./components/AdminPanel";
import BuffetPages from "./components/BuffetPages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<BuffetReservations />} />
      <Route path="/make-reservation" element={<MakeReservation />} />
      <Route path="/buffet-admin" element={<BuffetAdminPages/>} /> 
      <Route path="/add-buffet" element={<Addbuffet />} />
      <Route path="/admin-panel" element={<AdminPanel />} />
      <Route path="/buffet-page" element={<BuffetPages/>} />
      
    </Routes>
  );   
};

export default App;