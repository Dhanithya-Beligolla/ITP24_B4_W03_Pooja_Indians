import { Routes, Route } from "react-router-dom";
import BuffetReservations from "./components/BuffetReservations";
import MakeReservation from "./components/MakeReservation/MakeReservation";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<BuffetReservations />} />
      <Route path="/make-reservation" element={<MakeReservation />} />
      
    </Routes>
  );   
};

export default App;