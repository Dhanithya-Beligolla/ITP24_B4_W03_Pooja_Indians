import './App.css';
import DisplayComplains from './Components/ComplainDetails/DisplayComplains';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './Components/Home/Home';
import AddComplain from './Components/AddComplain/AddComplain';
function App() {
  return (
    <div>
      
      <React.Fragment>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/addcomplains" element={<AddComplain />} /> 
          <Route path="/complaindetails" element={<DisplayComplains/>} />

        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
