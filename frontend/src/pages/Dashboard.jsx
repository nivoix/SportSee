import "./Dashboard.scss";
import Navbar from "../components/Navbar";
import LateralBar from "../components/LateralBar";
import { PropTypes } from "prop-types";

const Dashboard = (alldatas) => {
  const { data, activity, average, performance } = alldatas.data;
  // console.log(data.userInfos);
  console.log(activity.sessions);
  console.log(average.sessions);
  console.log(performance.data);
  console.log(performance.kind);

  return (
    <>
      <Navbar />
      <main>
        <LateralBar />
        <div className="dashboard">
          <h1>Bonjour {data.userInfos.firstName}</h1>
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

Dashboard.propTypes = {
  alldatas: PropTypes.any,
  userInfos: PropTypes.object,
  activity: PropTypes.object,
  sessions: PropTypes.array,
  performance: PropTypes.array,
  score: PropTypes.number,
  keyData: PropTypes.array,
  firstName: PropTypes.string,
  map: PropTypes.func,
};

export default Dashboard;
