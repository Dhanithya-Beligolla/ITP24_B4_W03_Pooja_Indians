import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import AddRooms from './componenet/addrooms';

function App() {
  return (
    <div className="App">
  <Router>
   <Header/>
  <Routes>

  <Route path="/" element={<AddRooms/>}></Route>
    
    
  </Routes>  
        
  </Router>

   </div>
        );
}

export default App;
