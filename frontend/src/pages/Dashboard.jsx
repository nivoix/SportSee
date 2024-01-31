import "./Dashboard.scss";
import Navbar from "../components/Navbar";
import LateralBar from "../components/LateralBar";
import { PropTypes } from "prop-types";
import ActivityGraph from "../components/ActivityGraph";
import LineGraph from "../components/LineGraph";

const Dashboard = (alldatas) => {
  const { userMocked, user, activity, average, performance } = alldatas.data;

  console.log(average.sessions);
  /* 
  console.log(performance.data);
  console.log(performance.kind); */

  return alldatas.data ? (
    <>
      <Navbar />
      <main>
        <LateralBar />
        <div className="dashboard">
          <h1>
            Bonjour{" "}
            <p>
              {user?.userInfos.firstName || userMocked?.userInfos.firstName}
            </p>
          </h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          <div className="containerGraph">
            <div className="graphiques">
              <div className="activityGraph">
                <ActivityGraph
                  data={activity?.sessions || userMocked?.activity_sessions}
                />
              </div>
              <div className="littleGraph">
                <LineGraph
                  data={average?.sessions || userMocked?.average_sessions}
                />
                <div className="radar">cible</div>
                <div className="score">score</div>
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
  ) : (
    ""
  );
};

Dashboard.propTypes = {
  alldatas: PropTypes.object,
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
