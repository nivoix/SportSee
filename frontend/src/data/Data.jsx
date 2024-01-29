import { useParams } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import useData from "./GetDatas";
import mockData from "../data/data.json";
/* import ErrorAPI from "../Error/ErrorAPI"
import ErrorNoUser from "../Error/ErrorNoUser" */

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
  console.log(userMocked);
  /*
  If data === undefined, there is a problem with the API, returned code 500, Internal server error
  If !data, user not find
  */
  /* if (data === undefined) return <ErrorAPI />
  if (!data) return <ErrorNoUser /> */
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
  }
};

export default Data;
