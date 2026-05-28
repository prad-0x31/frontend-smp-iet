import { useTheme } from "../context/ThemeContext"
import darkIcon from "../icons/moon2.png"
import lightMode from "../icons/brightness.png"
import Navbar from "./Navbar";

const NAV_ITEMS = [
  { label: "Shop" },
  { label: "Collections" },
  { label: "About" },
  { label: "Contact" },
];

function Headbar() {

  const { darkMode, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="header-brand">
        <span className="brand-mark">MS</span>
        <div>
          <span className="brand-name">MiniShop</span>
          <span className="brand-tagline">
            Curated essentials, better shopping
          </span>
        </div>
      </div>

    <Navbar className="nav"  />
      <div className="header-actions">
        <button className={!darkMode?'btn btn-sm btn-ghost themeButton lightIcon' : "btn btn-sm btn-ghost themeButton" } onClick={toggleTheme} > {darkMode ? <img src={darkIcon} /> : <img src={lightMode} />} </button>
        <button type="button" className="btn btn-sm btn-ghost" disabled>
          Sign In
        </button>
      </div>
    </header>
  );
}

export default Headbar;
