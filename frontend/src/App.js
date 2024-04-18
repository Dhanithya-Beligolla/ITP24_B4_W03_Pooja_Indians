import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import AddRooms from './componenet/addrooms';
import Header from './componenet/header';
import Reportdetails from './componenet/report';
import RoomsDetails from './componenet/roomdetails';
import UpdateRooms from './componenet/updaterooms';

function App() {
  return (
    <div className="App">
  <Router>
   <Header/>
  <Routes>

  <Route path="/" element={<AddRooms/>}></Route>

  <Route path="/report" element={<Reportdetails/>}></Route>

  <Route path="/roomsdetails" element={<RoomsDetails/>}></Route>

  <Route path="/roomsupdate/:id" element={<UpdateRooms/>}></Route>
    
    
  </Routes>  
        
  </Router>

   </div>
        );
}

export default App;
