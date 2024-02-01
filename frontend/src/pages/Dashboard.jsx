import "./Dashboard.scss";
import Navbar from "../components/Navbar";
import LateralBar from "../components/LateralBar";
import { PropTypes } from "prop-types";
import ActivityGraph from "../components/ActivityGraph";
import LineGraph from "../components/LineGraph";
import RadarGraph from "../components/RadarGraph";
import ScoreGraph from "../components/ScoreGraph";

const Dashboard = (alldatas) => {
  const { userMocked, user, activity, average, performance } = alldatas.data;

  const dataFormated = (performance?.data || userMocked.performance.data)
    .map((dataKind) => ({
      ...dataKind,
      kind:
        performance?.kind[dataKind.kind] ||
        userMocked.performance.kind[dataKind.kind],
    }))
    .reverse();

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
                <RadarGraph data={dataFormated} />
                <ScoreGraph data={user || userMocked} />
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
    "loading"
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
