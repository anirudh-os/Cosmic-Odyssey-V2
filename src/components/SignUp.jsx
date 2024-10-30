import { useState } from "react";
import "../css/Sign_up.css";
import signInBackground from "../assets/sign_in_background.jpg";
import loginImage from "../assets/login_image.png";
import { Link } from "react-router-dom";

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
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
      <div className="signup-container">
        <div className="signup-box">
          <div className="man">
            <img src={loginImage} alt="user icon" />
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

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

            <button type="submit" id="signup-btn">
              Sign Up
            </button>

            <div className="links">
              <Link to="/signin">Already have an account? Sign in here.</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
