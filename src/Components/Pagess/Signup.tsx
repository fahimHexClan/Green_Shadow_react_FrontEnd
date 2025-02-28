import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./pagesCss/Signup.css"; 
import background from "../../assets/crop1.jpg";


const Signup: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
<div className="signup-container" style={{ 
    backgroundImage: `url(${background})`, 
    backgroundSize: "cover", 
    backgroundPosition: "center", 
    backgroundRepeat: "no-repeat",
    height: "100vh"
}}>

    <div className="signup-container">

      <h1 className="signup-heading">Crop Monitoring SignUp</h1>
      
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignup}>
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />

          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />

          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? <button className="login-button" onClick={() => navigate("/login")}>Login</button></p>
      </div>
    </div>
    </div>
  );
};

export default Signup;
