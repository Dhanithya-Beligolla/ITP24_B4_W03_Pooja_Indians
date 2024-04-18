import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import AddRooms from './componenet/addrooms';
import Header from './componenet/header';
import Reportdetails from './componenet/report';
import RoomsDetails from './componenet/roomdetails';
import UpdateRooms from './componenet/updaterooms';


import AddAccount from './register_component/adduser';
import UpdateUser from './register_component/updateuser';
import Registerdetails from './register_component/userdetails';
import Login from './login_component/login';

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




  <Route path="/addaccount" element={<AddAccount/>}></Route>
  <Route path="/updateregitser/:id" element={<UpdateUser/>}></Route>
  <Route path="/registerdetails" element={<Registerdetails/>}></Route>




  <Route path="/login" element={<Login/>}></Route>
    
    
  </Routes>  
        
  </Router>

   </div>
        );
}

export default App;
