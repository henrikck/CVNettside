import { NavLink } from "react-router-dom";
import homeLogo from "../assets/Home.jpg";
import "./Navbar.css";

export function Navbar() {
  return (
    <nav className="navbar-wrapper">
      {/* Denne diven vil nå skjules på mobil via CSS */}
      <div className="logo-container">
        <NavLink to="/">
          <img src={homeLogo} alt="Hjem" className="nav-logo-img" />
        </NavLink>
      </div>

      <div className="navbar-pill">
        <NavLink to="/About" className="nav-item">About</NavLink>
        <NavLink to="/Experience" className="nav-item">Experience</NavLink>
        <NavLink to="/SportsCareer" className="nav-item">Sports</NavLink>
        <NavLink to="/Contact" className="nav-item">Contact</NavLink>
      </div>
    </nav>
  );
}