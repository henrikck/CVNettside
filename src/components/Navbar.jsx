import { NavLink } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
  return (
    <nav className="navbar-wrapper">
      <div className="navbar-pill">
        <NavLink to="/About" className="nav-item">
          About
        </NavLink>
        <NavLink to="/Experience" className="nav-item">
          Experience
        </NavLink>
        <NavLink to="/SportsCareer" className="nav-item">
          Sports
        </NavLink>
        <NavLink to="/Contact" className="nav-item">
          Contact
        </NavLink>
      </div>
    </nav>
  );
}
