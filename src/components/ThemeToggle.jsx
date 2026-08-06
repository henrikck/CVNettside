import darkModeIcon from "../assets/dark-mode.png";
import lightModeIcon from "../assets/light-mode.png";
import { useTheme } from "./ThemeContext";
import "./ThemeToggle.css";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={isDark ? "Bytt til lyst tema" : "Bytt til mørkt tema"}
      title={isDark ? "Lyst tema" : "Mørkt tema"}
    >
      <img
        src={isDark ? lightModeIcon : darkModeIcon}
        alt=""
        className="theme-toggle-img"
      />
    </button>
  );
}
