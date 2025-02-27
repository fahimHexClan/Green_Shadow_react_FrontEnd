import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import Login from "./Components/Pagess/Login";
import Signup from "./Components/Pagess/Signup";
import DashBoard from "./Components/Pagess/DashBoard";
import "./App.css";

function App() {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  return (
    
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={isAuthenticated ? <DashBoard /> : <Navigate to="/login" replace />} />
      <Route path="*" element={<Navigate to="/login" replace />} />  {/* ✅ Always redirect to login first */}
      </Routes>
     
   
);
}

export default App;
