import { useState } from "react";
import "../css/styles1.css";

function Home() {
  const [sizeValue, setSize] = useState(0);

  return (
    <div>
      <nav id="navbar">
        <div className="navbar-container">
          <button
            className="hamburger"
            id="hamburger"
            onClick={() => setSize(150)}
          >
            ☰
          </button>
          <header id="logo-header">
            <img id="logo" src="./src/assets/logo2.svg" alt="logo" />
            <p>Cosmic Odyssey</p>
          </header>
          <div id="details">
            <div id="nav_info">
              <a href="./webpages/contact-us.html">Contact</a>
              <a href="#">About</a>
            </div>

            <button id="sign_up" className="button">
              Sign Up
            </button>
            <button id="sign_in" className="button">
              Sign In
            </button>
          </div>
        </div>

        <div
          id="sidebar"
          className="sidebar"
          style={{ width: sizeValue + "px" }}
        >
          <button className="closebtn" id="closebtn" onClick={() => setSize(0)}>
            &times;
          </button>
          <a href="#">Community</a>
          <a href="#">Resources</a>
          <a href="#">News</a>
        </div>
      </nav>

      <div id="hero">
        <video autoPlay muted loop id="hero-video" preload="auto">
          <source src="./src/assets/Space2.mp4" type="video/mp4" />
        </video>

        <div id="hero-overlay">
          <h1>Welcome to Cosmic Odyssey</h1>
          <p>Random intro or text if you want to add any.</p>
          <a href="#cards" className="cta-button">
            Explore More
          </a>
        </div>
      </div>

      <div id="cards">
        <div className="card" id="card1">
          <img src="./src/assets/ton618.webp" />
          TON 618
          <p>
            TON 618 is, strictly speaking, a quasar, but the name also refers to
            the supermassive black hole (more properly TON 618*) that powers it,
            which is one of the largest ever discovered
          </p>
        </div>
        <div className="card" id="card2">
          <img src="./src/assets/milky_way.jpg" />
          MILKY WAY
          <p>
            Milky Way Galaxy, large spiral system consisting of several hundred
            billion stars, one of which is the Sun. It takes its name from the
            Milky Way, the irregular luminous band of stars and gas clouds that
            stretches across the sky as seen from Earth
          </p>
        </div>
        <div className="card" id="card3">
          <img src="./src/assets/mars.jpg" />
          MARS
          <p>
            Mars is no place for the faint-hearted. It's dry, rocky, and bitter
            cold. The fourth planet from the Sun, Mars, is one of Earth's two
            closest planetary neighbors{" "}
          </p>
        </div>
      </div>

      <div id="footer">
        <p>&copy; Cosmic Odyssey</p>
      </div>
    </div>
  );
}

export default Home;
