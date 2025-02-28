import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Pagess/Login";
import Signup from "./Components/Pagess/Signup";
import DashBoard from "./Components/Pagess/DashBoard";
import "./App.css";

function App() {

  return (<>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
     </>
   
);
}

export default App;
