import "./Dashboard.scss";
import Navbar from "../components/Navbar";
import LateralBar from "../components/LateralBar";
import { PropTypes } from "prop-types";
import ActivityGraph from "../components/ActivityGraph";
import LineGraph from "../components/LineGraph";
import RadarGraph from "../components/RadarGraph";
import ScoreGraph from "../components/ScoreGraph";
import NutrientsCard from "../components/NutrientsCard";
import calories from "../assets/calories.svg";
import proteines from "../assets/proteines.svg";
import glucides from "../assets/glucides.svg";
import lipides from "../assets/lipides.svg";

const Dashboard = (alldatas) => {
  const {
    userMocked,
    dataScoreMocked,
    dataAverageMocked,
    dataActivityMocked,
    dataPerformanceMocked,
    user,
    dataScoreAPI,
    dataAverageAPI,
    dataActivityAPI,
    dataPerformanceAPI,
  } = alldatas.data;

  /***couleurs passées à une variable pour les cards des nutriment */
  const colorCalories = "#fbeaea";
  const colorProteines = "#e9f4fb";
  const colorGlucides = "#faf6e5";
  const colorLipides = "#fbeaef";

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
          <p className="felicitation">
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
          <div className="containerGraph">
            <div className="graphiques">
              <div className="activityGraph">
                <ActivityGraph data={dataActivityAPI || dataActivityMocked} />
              </div>
              <div className="littleGraph">
                <LineGraph data={dataAverageAPI || dataAverageMocked} />
                <RadarGraph
                  data={dataPerformanceAPI || dataPerformanceMocked}
                />
                <ScoreGraph data={dataScoreAPI || dataScoreMocked} />
              </div>
            </div>
            <div className="CardsNutriment">
              <NutrientsCard
                imageUrl={calories}
                color={colorCalories}
                count={(
                  user?.keyData.calorieCount / 1000 ||
                  userMocked?.keyData.calorieCount / 1000
                ).toFixed(3)}
                unity="kCal"
                name="Calories"
              />
              <NutrientsCard
                imageUrl={proteines}
                color={colorProteines}
                count={
                  user?.keyData.proteinCount || userMocked?.keyData.proteinCount
                }
                unity="g"
                name="Protéines"
              />
              <NutrientsCard
                imageUrl={glucides}
                color={colorGlucides}
                count={
                  user?.keyData.carbohydrateCount ||
                  userMocked?.keyData.carbohydrateCount
                }
                unity="g"
                name="Glucides"
              />
              <NutrientsCard
                imageUrl={lipides}
                color={colorLipides}
                count={
                  user?.keyData.lipidCount || userMocked?.keyData.lipidCount
                }
                unity="g"
                name="Lipides"
              />
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
