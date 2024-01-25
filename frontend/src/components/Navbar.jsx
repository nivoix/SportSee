import logo from "../assets/logo.png";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <ul className="navbarCardLink">
        <li href="#">Accuiel</li>
        <li href="#">Profil</li>
        <li href="#">Réglages</li>
        <li href="#">Communauté</li>
      </ul>
    </div>
  );
};

export default Navbar;
