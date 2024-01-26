import "./Dashboard.scss";
import data from "../data/data.json";
import Navbar from "../components/Navbar";
import LateralBar from "../components/LateralBar";
console.log(data);

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <main>
        <LateralBar />
        <div className="dashboard">
          <h1>Bonjour THOMAS</h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          <div className="containerGraph">
            <div className="graphiques">
              <div>Activités</div>
              <div className="littleGraph">
                <div>courbe</div>
                <div>cible</div>
                <div>score</div>
              </div>
            </div>
            <div className="CardsNutriment">
              <div>Cards Nutriment</div>
              <div>Cards Nutriment</div>
              <div>Cards Nutriment</div>
              <div>Cards Nutriment</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
