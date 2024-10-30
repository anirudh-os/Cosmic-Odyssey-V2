import { useState } from "react";
import "../css/Sign_in.css";
import signInBackground from "../assets/sign_in_background.jpg";
import loginImage from "../assets/login_image.png";
import { Link } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="background-container">
      <img
        src={signInBackground}
        alt="Background"
        className="background-image"
      />
      <div className="login-container">
        <div className="login-box">
          <div className="man">
            <img src={loginImage} alt="man" />
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" id="login-btn">
              Sign In
            </button>
            <div className="links">
              <a href="#">Forgot password?</a>
              <Link to="/signup">New? Register here.</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
