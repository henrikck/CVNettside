import { NavLink, useLocation } from "react-router-dom";
import homeLogo from "../assets/Home.webp";
import { ThemeToggle } from "./ThemeToggle";
import "./Navbar.css";

export function Navbar() {
  const location = useLocation(); // Hent nåværende sti

  
  const isHomePage = location.pathname === "/";

  return (
    <nav className="navbar-wrapper">
      {}
      <div className="logo-container">
        {!isHomePage && (
          <NavLink to="/">
            <img
              src={homeLogo}
              alt="Hjem"
              className="nav-logo-img"
              width={48}
              height={48}
              decoding="async"
            />
          </NavLink>
        )}
      </div>

      <div className="navbar-pill">
        <NavLink to="/About" className="nav-item">Om</NavLink>
        <NavLink to="/Experience" className="nav-item">Erfaring</NavLink>
        <NavLink to="/SportsCareer" className="nav-item">Idrett</NavLink>
        <NavLink to="/Contact" className="nav-item">Kontakt</NavLink>
      </div>

      <div className="theme-container">
        <ThemeToggle />
      </div>
    </nav>
  );
}