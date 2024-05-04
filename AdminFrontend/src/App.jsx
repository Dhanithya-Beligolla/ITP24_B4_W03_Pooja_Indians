import { Route, Routes } from "react-router-dom";
import Posters from "./components/Posters"
import AddPoster from "./components/AddPoster/AddPoster";
import Vacancys from "./components/Vacancys";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Posters />} />
      <Route path="/AddPoster" element={<AddPoster />} />
      <Route path="/Vacancys" element={<Vacancys />} />
    </Routes>
  );
}

export default App;
