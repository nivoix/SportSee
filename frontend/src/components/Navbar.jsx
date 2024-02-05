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
        <NavLink to="/" className="navbarLink">
          Accueil
        </NavLink>
        <li className="navbarLink">Profil</li>
        <li className="navbarLink">Réglages</li>
        <li className="navbarLink">Communauté</li>
      </ul>
    </div>
  );
};

export default Navbar;
