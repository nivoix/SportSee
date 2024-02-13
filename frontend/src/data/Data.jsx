import { useLocation, useParams } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import useData from "./GetDatas";
import mockData from "../data/data.json";
import Error from "../pages/Error";
import {
  ActivityModel,
  AverageModel,
  PerformanceModel,
  ScoreModel,
} from "./modelisation";

const Data = () => {
  const { state } = useLocation();
  const id = useParams();
  let alldatas = {};

  /*********************  USER   API    *********************** */
  const user = useData(`http://localhost:3000/user/${id.userId}`);
  const dataScoreAPI = new ScoreModel(user);

  /*******************  ACTIVITY   API   ********************** */
  const activity = useData(`http://localhost:3000/user/${id.userId}/activity`);
  const dataActivityFetch = new ActivityModel(activity?.sessions);
  const dataActivityAPI = dataActivityFetch.getFormattedData();

  /******************** AVERAGE   API     ********************* */
  const average = useData(
    `http://localhost:3000/user/${id.userId}/average-sessions`
  );
  const dataAverageFetch = new AverageModel(average?.sessions);
  const dataAverageAPI = dataAverageFetch?.getFormattedData();

  /******************* PERFORMANCE   API     ****************** */
  const performance = useData(
    `http://localhost:3000/user/${id.userId}/performance`
  );
  const dataPerformanceFetch = new PerformanceModel(
    performance?.data,
    performance?.kind
  );
  const dataPerformanceAPI = dataPerformanceFetch.getFormattedData();
  /******************************************************************
   *
   ******************************************************************/
  /*****************   USER  MOCKED     ************************ */
  const userMocked = mockData.find((u) => u.userId == id.userId);
  const dataScoreMocked = new ScoreModel(userMocked).userScore;
  /***************  AVERAGE  MOCKED   *********************µ**** */
  const dataAverage = new AverageModel(userMocked.average_sessions);
  const dataAverageMocked = dataAverage.getFormattedData();
  /******************ACTIVITY   MOCKED    ********************** */
  const dataActivity = new ActivityModel(userMocked.activity_sessions);
  const dataActivityMocked = dataActivity.getFormattedData();
  /****************** PERFORMANCE   MOCKED   µµµµµµµµµµµµµµµµµµµ */
  const dataperformance = new PerformanceModel(
    userMocked.performance.data,
    userMocked.performance.kind
  );
  const dataPerformanceMocked = dataperformance.getFormattedData();

  if (state === null) {
    return <Error />;
  } else if (state.key.dataSelected === "dataMocked") {
    alldatas = {
      userMocked,
      dataScoreMocked,
      dataAverageMocked,
      dataActivityMocked,
      dataPerformanceMocked,
    };
    return <Dashboard data={alldatas} />;
  } else if (
    state.key.dataSelected === "API" &&
    user != null &&
    activity != null &&
    average != null &&
    performance != null &&
    dataScoreAPI != null &&
    dataAverageAPI != null &&
    dataActivityAPI != null &&
    dataPerformanceAPI != null
  ) {
    alldatas = {
      user,
      performance,
      dataScoreAPI,
      dataAverageAPI,
      dataActivityAPI,
      dataPerformanceAPI,
    };
    return <Dashboard data={alldatas} />;
  }
};

export default Data;
