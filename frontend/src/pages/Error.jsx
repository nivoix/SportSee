import "./Error.scss";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div className="error-page">
      <NavLink to="/" className="logo">
        <img src={logo} alt="logo" />
      </NavLink>
      <p className="errorText"> Error 404</p>
      <p className="errorTextWhy">Page not found</p>
      <NavLink to="/" className="linkHomePage">
        {" "}
        Back to Home Page
      </NavLink>
    </div>
  );
};

export default Error;
