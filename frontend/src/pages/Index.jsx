import logo from "../assets/logo.png";
import { useState } from "react";
import { generatePath, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Index.scss";
import Select from "react-select";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [dataSelected, setDataSelected] = useState("");
  const navigate = useNavigate();
  const url = `http://localhost:3000/user/${userId}`;
  const [serverUnavailable, setServerUnavailable] = useState(false);

  const options = [
    { value: "12", label: "12" },
    { value: "18", label: "18" },
  ];
  const optionData = [
    { value: "API", label: "API" },
    { value: "dataMocked", label: "dataMocked" },
  ];

  const handleChangeId = (e) => {
    setUserId(e.value);
  };
  const handleChangeData = (e) => {
    setDataSelected(e.value);
  };
  /* selection de l'utilisateur et de la source des données */
  const handleSubmit = (e) => {
    e.preventDefault();
    axios(url)
      .then((response) => {
        const path = generatePath(`/user/${userId}`, response.data.data);
        navigate(path, { state: { key: { dataSelected } } });
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
          <Select id="userId" options={options} onChange={handleChangeId} />
        </div>
        <div className="loginSelect">
          <p>{"Veuillez sélectionner votre source de données:"}</p>
          <Select
            id="userId"
            options={optionData}
            onChange={handleChangeData}
          />
        </div>
        <button className="btnValidate">Valider</button>
      </form>
      <div className="login-error">
        {serverUnavailable && (
          <p className="login-error-message">{"Serveur indisponible"}</p>
        )}
      </div>
    </div>
  );
};

export default Login;
