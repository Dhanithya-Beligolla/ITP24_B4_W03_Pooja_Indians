import { Routes, Route } from "react-router-dom";
import BuffetReservations from "./components/BuffetReservations";
import MakeReservation from "./components/MakeReservation/MakeReservation";
import BuffetPages from "./components/BuffetPages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<BuffetReservations />} />
      <Route path="/make-reservation" element={<MakeReservation />} />
      <Route path="/buffet-pages" element={<BuffetPages/>} /> 
      
    </Routes>
  );   
};

export default App;