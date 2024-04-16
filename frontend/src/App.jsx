import { Routes, Route } from "react-router-dom";
import BuffetReservations from "./components/BuffetReservations";
import MakeReservation from "./components/MakeReservation/MakeReservation";
import BuffetPages from "./components/BuffetPages";
import Addbuffet from "./components/AddBuffet/Addbuffet";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<BuffetReservations />} />
      <Route path="/make-reservation" element={<MakeReservation />} />
      <Route path="/buffet-pages" element={<BuffetPages/>} /> 
      <Route path="/add-buffet" element={<Addbuffet />} />
      
    </Routes>
  );   
};

export default App;