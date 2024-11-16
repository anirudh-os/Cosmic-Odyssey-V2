import { useState } from "react";
import { Link } from "react-router-dom";
// import "../css/styles1.css";
import "../css/explore.css"; // Include your custom explore-specific styles

// Import assets
import spaceVideo from "../assets/Space1.mp4";
import logo from "../assets/logo2.svg";
import ton618 from "../assets/ton618.webp";
import sirius from "../assets/Sirius-Star.jpg";
import andromeda from "../assets/Andromeda-Galaxy.jpg";
import triangulum from "../assets/Triangulum-Galaxy.jpg";
import whirlpool from "../assets/whirlpool-galaxy.webp";
import crabNebula from "../assets/crab-nebula.webp";
import magellanicCloud from "../assets/Magellanic-Cloud.webp";
import polaris from "../assets/Polaris.webp";
import betelgeuse from "../assets/Betelgeuse.jpg";

function Explore() {
  const [sizeValue, setSize] = useState(0);

  // Cards data for Explore page
  const cardsData = [
    {
      id: "Alpha-Centauri",
      imageSrc: ton618,
      content:
        "TON 618 is, strictly speaking, a quasar, but the name also refers to the supermassive black hole (more properly TON 618*) that powers it, which is one of the largest ever discovered.",
    },
    {
      id: "Sirius",
      imageSrc: sirius,
      content:
        "Sirius, brightest star in the night sky. It is a binary star in the constellation Canis Major.",
    },
    {
      id: "Andromeda-Galaxy",
      imageSrc: andromeda,
      content:
        "Andromeda Galaxy, great spiral galaxy in the constellation Andromeda, the nearest large galaxy.",
    },
    {
      id: "Triangulum-Galaxy",
      imageSrc: triangulum,
      content:
        "Triangulum Galaxy, is the third-largest member of the Local Group of galaxies, after the Andromeda galaxy.",
    },
    {
      id: "Whirlpool-Galaxy",
      imageSrc: whirlpool,
      content:
        "The Whirlpool Galaxy is actively forming new stars, with its spiral arms rich in hydrogen gas, which fuels star formation.",
    },
    {
      id: "Crab-Nebula",
      imageSrc: crabNebula,
      content:
        "The Carina Nebula is a vast star-forming region located about 7,500 light-years away in the constellation Carina.",
    },
    {
      id: "Magellanic-Cloud",
      imageSrc: magellanicCloud,
      content:
        "Nearly 200,000 light-years from Earth, the Large Magellanic Cloud, a satellite galaxy of the Milky Way, floats in space, in a long and slow dance around our galaxy.",
    },
    {
      id: "Polaris",
      imageSrc: polaris,
      content:
        "Polaris, Earth’s present northern polestar, or North Star, at the end of the 'handle' of the so-called Little Dipper in the constellation Ursa Minor.",
    },
    {
      id: "Betelgeuse",
      imageSrc: betelgeuse,
      content:
        "Betelgeuse, second brightest star in the constellation Orion, marking the eastern shoulder of the hunter. Betelgeuse is a red supergiant star roughly 764 times as large as the Sun.",
    },
  ];

  return (
    <div className="Explore_body">
      {/* Navbar */}
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
            <img id="logo" src={logo} alt="logo" />
            <p>Cosmic Odyssey</p>
          </header>
          <div id="details">
            <div id="nav_info">
              <Link to="/contact">Contact</Link>
              <a href="#">About</a>
            </div>

            <Link to="/signup">
              <button id="sign_up" className="button">
                Sign Up
              </button>
            </Link>
            <Link to="/signin">
              <button id="sign_in" className="button">
                Sign In
              </button>
            </Link>
          </div>
        </div>

        {/* Sidebar */}
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

      {/* Hero Section */}
      <div id="hero">
        <video autoPlay muted loop id="hero-video" preload="auto">
          <source src={spaceVideo} type="video/mp4" />
        </video>

        <div id="hero-overlay">
          <h1>Explore the Cosmos</h1>
          <p>Discover amazing celestial bodies in our universe.</p>
          <a href="#cards" className="cta-button">
            Explore More
          </a>
        </div>
      </div>

      {/* Cards Section */}
      <div id="cards">
        {cardsData.map((card, index) => (
          <div className="card" id={card.id} key={index}>
            <img src={card.imageSrc} alt={card.id} className="card-image" />
            <h2>{card.id}</h2>
            <p>{card.content}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div id="footer">
        <p>&copy; Cosmic Odyssey</p>
      </div>
    </div>
  );
}

export default Explore;
