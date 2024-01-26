import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">
        <img src={logo} alt="logo" className="logo" />
      </NavLink>
      <ul className="navbarCardLink">
        <li href="#">Accueil</li>
        <li href="#">Profil</li>
        <li href="#">Réglages</li>
        <li href="#">Communauté</li>
      </ul>
    </div>
  );
};

export default Navbar;
