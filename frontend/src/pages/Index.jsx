import logo from "../assets/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Index.scss";
import Select from "react-select";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [dataSelected, setDataSelected] = useState("");
  const navigate = useNavigate();

  const options = [
    { value: "12", label: "12" },
    { value: "18", label: "18" },
  ];
  const optionData = [
    { value: "API", label: "API" },
    { value: "dataMocked", label: "dataMocked" },
  ];

  /* selection de l'utilisateur et de la source des données */
  const handleChangeId = (e) => {
    setUserId(e.value);
  };
  const handleChangeData = (e) => {
    setDataSelected(e.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/user/${userId}`, { state: { key: { dataSelected } } });
  };

  return (
    <div className="login">
      <img src={logo} alt="logo" className="loginLogo" />
      <form action="" onSubmit={handleSubmit} className="loginForm">
        <div className="loginSelect">
          <p>{"Veuillez sélectionner votre identifiant:"}</p>
          <Select
            id="userId"
            options={options}
            onChange={handleChangeId}
            required
          />
        </div>
        <div className="loginSelect">
          <p>{"Veuillez sélectionner votre source de données:"}</p>
          <Select
            id="userId"
            options={optionData}
            onChange={handleChangeData}
            required
          />
        </div>
        <button className="btnValidate">Valider</button>
      </form>
    </div>
  );
};

export default Login;
