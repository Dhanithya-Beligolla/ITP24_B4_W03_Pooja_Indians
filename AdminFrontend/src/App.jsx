import { Route, Routes } from "react-router-dom";
import Posters from "./components/Posters"
import AddPoster from "./components/AddPoster/AddPoster";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Posters />} />
      <Route path="/AddPoster" element={<AddPoster />} />
    </Routes>
  );
}

export default App
