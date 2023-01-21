import { Link } from "react-router-dom";
// import { useContext } from "react";
// import { ThemeContext } from "../context/ThemeContext";
import { useTheme } from "../hooks/useTheme";

//styles
import "./navbar.css";

//components
import Searchbar from "./Searchbar";

const Navbar = () => {
  // const { color } = useContext(ThemeContext);
  const { color, changeColor } = useTheme();

  return (
    <div className="navbar" style={{ background: color }}>
      <nav onClick={() => changeColor("pink")}>
        <Link to="/" className="brand">
          <h1>Cooking Master</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
};

export default Navbar;
