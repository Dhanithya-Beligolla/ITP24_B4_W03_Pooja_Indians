import { Route, Routes } from "react-router-dom";
import React from "react";
import NavBar from "./Components/NavBar";

import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Login from "./Pages/User_Management/Login";
import RegisterUser from "./Pages/User_Management/RegisterUser";
import "antd/dist/reset.css";
import AdminDashboard from "./Pages/User_Management/AdminDashboard";

import ContactUs from "./Pages/User_Management/ContactUs";
import Profile from "./Pages/User_Management/Profile";
import ReportUser from "./Components/ReportUser"


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/repo" element={<ReportUser/>}/>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/ContactUs" element={<ContactUs />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Register" element={<RegisterUser />} />
        <Route exact path="/Profile" element={<Profile />} />
        {localStorage.getItem("userRole") === "admin" && (
          <Route exact path="/AdminDashboard" element={<AdminDashboard />} />
        )}

      </Routes>
      <Footer />
      {/* <div className="App">
      <ContactForm />
      </div> */}
    </>
  );
}

export default App;
