import { useParams } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import useData from "./GetDatas";
import mockData from "../data/data.json";
import Error from "../pages/Error";

const Data = () => {
  const id = useParams();
  let alldatas = {};
  const dataMocked = false;

  const user = useData(`http://localhost:3000/user/${id.userId}`);
  const activity = useData(`http://localhost:3000/user/${id.userId}/activity`);
  const average = useData(
    `http://localhost:3000/user/${id.userId}/average-sessions`
  );
  const performance = useData(
    `http://localhost:3000/user/${id.userId}/performance`
  );

  const userMocked = mockData.find((u) => u.userId == id.userId);

  if (dataMocked) {
    alldatas = { userMocked };
    return <Dashboard data={alldatas} />;
  } else if (
    user != null &&
    activity != null &&
    average != null &&
    performance != null
  ) {
    alldatas = {
      user,
      activity,
      average,
      performance,
    };
    return <Dashboard data={alldatas} />;
  } else return <Error />;
};

export default Data;
