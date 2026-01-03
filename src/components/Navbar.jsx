import { NavLink } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <NavLink to="/About" className="nav-link">
          Om
        </NavLink>
        <NavLink to="/Experience" className="nav-link">
          Erfaring
        </NavLink>
        <NavLink to="/SportsCareer" className="nav-link">
          Idrettskarriere
        </NavLink>
        <NavLink to="/Contact" className="nav-link">
          Kontakt
        </NavLink>
      </div>
    </nav>
  );
}
