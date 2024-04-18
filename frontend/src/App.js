import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import AddRooms from './componenet/addrooms';
import Header from './componenet/header';
import Reportdetails from './componenet/report';

function App() {
  return (
    <div className="App">
  <Router>
   <Header/>
  <Routes>

  <Route path="/" element={<AddRooms/>}></Route>

  <Route path="/report" element={<Reportdetails/>}></Route>
    
    
  </Routes>  
        
  </Router>

   </div>
        );
}

export default App;
