import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Reducer/slice/authSlice";
import { useNavigate } from "react-router-dom";
import { AuthData } from "../../Model/AuthData";
import "../../Components/Pagess/pagesCss/Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import background from "../../assets/crop1.jpg";


const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    const foundUser = existingUsers.find(
      (user: AuthData) => user.email === email && user.password === password
    );

    if (!foundUser) {
      toast.error("Invalid email or password!", { position: "top-center" });
      return;
    }

    dispatch(login(foundUser));
    navigate("/dashboard");
  };
  
  return (
    <div className="logIn-container" style={{ 
      backgroundImage: `url(${background})`, 
      backgroundSize: "cover", 
      backgroundPosition: "center", 
      backgroundRepeat: "no-repeat",
      height: "100vh"
  }}>
    <div className="login-container">
            <h1 className=" Login-heading">Crop Monitoring LogIn</h1>

      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>

        <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <label htmlFor="password">Password</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <button onClick={() => navigate("/signup")} className="signup-button">Sign Up</button>
        </p>
      </div>
      <ToastContainer />
    </div>
  </div>
  );
};

export default Login;
