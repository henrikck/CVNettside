import { NavLink, useLocation } from "react-router-dom"; // Importer useLocation
import homeLogo from "../assets/Home.jpg";
import "./Navbar.css";

export function Navbar() {
  const location = useLocation(); // Hent nåværende sti

  // Sjekk om vi er på hjemmesiden
  const isHomePage = location.pathname === "/";

  return (
    <nav className="navbar-wrapper">
      {/* Profilbildet vises bare hvis vi IKKE er på hjemmesiden */}
      <div className="logo-container">
        {!isHomePage && (
          <NavLink to="/">
            <img src={homeLogo} alt="Hjem" className="nav-logo-img" />
          </NavLink>
        )}
      </div>

      <div className="navbar-pill">
        <NavLink to="/About" className="nav-item">Om</NavLink>
        <NavLink to="/Experience" className="nav-item">Erfaring</NavLink>
        <NavLink to="/SportsCareer" className="nav-item">Idrett</NavLink>
        <NavLink to="/Contact" className="nav-item">Kontakt</NavLink>
      </div>
    </nav>
  );
}