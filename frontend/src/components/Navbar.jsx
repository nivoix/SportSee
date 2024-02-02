import { NavLink, generatePath, useParams } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Navbar.scss";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const id = useParams();
  console.log(id.userId);
  const navigate = useNavigate();
  const path = generatePath(`/user/${id.userId}/profil`, id.userId);
  return (
    <div className="navbar">
      <NavLink to="/">
        <img src={logo} alt="logo" className="logo" />
      </NavLink>
      <ul className="navbarCardLink">
        <NavLink onClick={() => navigate(-1)} className="navbarLink">
          Accueil
        </NavLink>
        <NavLink onClick={() => navigate(path)} className="navbarLink">
          Profil
        </NavLink>
        <li className="navbarLink">Réglages</li>
        <li className="navbarLink">Communauté</li>
      </ul>
    </div>
  );
};

export default Navbar;
