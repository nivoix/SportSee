import logo from "../assets/logo.png";
import { useState } from "react";
import { generatePath, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Index.scss";
import Select from "react-select";

const Login = () => {
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();
  const url = `http://localhost:3000/user/${userId}`;
  const [serverUnavailable, setServerUnavailable] = useState(false);
  const [userNonexistent, setUserNonexistent] = useState(false);

  const options = [
    { value: "12", label: "12" },
    { value: "18", label: "18" },
  ];

  const handleChange = (e) => {
    setUserId(e.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios(url)
      .then((response) => {
        if (response) {
          const path = generatePath("/user/:userId", { userId });
          navigate(path);
        } else {
          setUserNonexistent(true);
          setTimeout(() => {
            setUserNonexistent(false);
          }, 3000);
        }
      })
      .catch((error) => {
        setServerUnavailable(true);
        setTimeout(() => {
          setServerUnavailable(false);
        }, 3000);
        console.log("Error", error.message);
      });
  };

  return (
    <div className="login">
      <img src={logo} alt="logo" />
      <form action="" onSubmit={handleSubmit} className="loginForm">
        <div className="loginSelect">
          <p>{"Veuillez sélectionner votre identifiant:"}</p>
          <Select id="userId" options={options} onChange={handleChange} />
        </div>
        <button className="btnValidate">Valider</button>
      </form>
      <div className="login-error">
        {serverUnavailable && (
          <p className="login-error-message">{"Serveur indisponible"}</p>
        )}
        {userNonexistent && (
          <p className="login-error-message">{"Utilisateur inexistant"}</p>
        )}
      </div>
    </div>
  );
};

export default Login;
