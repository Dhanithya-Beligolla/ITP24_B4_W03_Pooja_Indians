import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import AddRooms from './component/addrooms';
import RoomsDetails from './component/roomdetails';
import UpdateRooms from './component/updaterooms';
import Reportdetails from './component/report';
import Header from './component/header';



import AddAccount from './register_component/adduser';
import Registerdetails from './register_component/userdetails';
import UpdateUser from './register_component/updateuser';
import Login from './login_component/login';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>

          <Route path="/" element={<AddRooms />}></Route>

          <Route path="/roomsdetails" element={<RoomsDetails />}></Route>

          <Route path="/roomsupdate/:id" element={<UpdateRooms />}></Route>


          <Route path="/report" element={<Reportdetails />}></Route>








          <Route path="/addaccount" element={<AddAccount />}></Route>
          <Route path="/registerdetails" element={<Registerdetails />}></Route>
          <Route path="/updateregitser/:id" element={<UpdateUser />}></Route>





          <Route path="/login" element={<Login />}></Route>


        </Routes>

      </Router>

    </div>
  );
}

export default App;
