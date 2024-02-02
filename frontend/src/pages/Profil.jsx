import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import useData from "../data/GetDatas";
import mockData from "../data/data.json";
import "./Profil.scss";

const Profil = () => {
  const id = useParams();
  console.log(id.userId);
  const userMocked = mockData.find((u) => u.userId == id.userId);
  console.log(userMocked);
  const user = useData(`http://localhost:3000/user/${id.userId}`);
  console.log(user);
  return user ? (
    <>
      <Navbar />
      <div className="cardProfil">
        <ul>
          <li className="labelProfil">Nom:</li>
          <span className="infosProfil">
            {user?.userInfos.lastName || userMocked?.userInfos.lastName}
          </span>
          <li className="labelProfil">Prénom:</li>
          <span className="infosProfil">
            {user?.userInfos.firstName || userMocked?.userInfos.firstName}
          </span>
          <li className="labelProfil">Age:</li>
          <span className="infosProfil">
            {user?.userInfos.age || userMocked?.userInfos.age} ans
          </span>
          <li className="labelProfil">Taille:</li>
          <span className="infosProfil">Non communiquée</span>
          <li className="labelProfil">Poids:</li>
          <span className="infosProfil">Non communiqué</span>
        </ul>
      </div>
    </>
  ) : (
    "Loading"
  );
};

export default Profil;
