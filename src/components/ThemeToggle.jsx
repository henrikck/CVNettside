import darkModeIcon from "../assets/dark-mode.webp";
import lightModeIcon from "../assets/light-mode.webp";
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
        width={24}
        height={24}
        decoding="async"
      />
    </button>
  );
}
