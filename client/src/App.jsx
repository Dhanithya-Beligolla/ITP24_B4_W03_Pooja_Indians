
//import './App.css'
import React from 'react' 
import Review from './components/Review'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddFeedback from './components/AddFeedback/AddFeedback';
const App = () =>{

  return (
    <>   

<Routes>
    <Route path="/" element={<Review/>}/>
    <Route path="/add" element={<AddFeedback/>}/>

</Routes>

    </>
  )
}

export default App
