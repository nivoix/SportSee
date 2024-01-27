import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Dashboard from "../pages/Dashboard";
/* import ErrorAPI from "../Error/ErrorAPI"
import ErrorNoUser from "../Error/ErrorNoUser" */

const Data = () => {
  const id = useParams();
  const [userData, setUserData] = useState(null);
  const [activityData, setActivityData] = useState(null);
  const [averageData, setAverageData] = useState(null);
  const [performanceData, setperformanceData] = useState(null);

  useEffect(() => {
    axios(`http://localhost:3000/user/${id.userId}`)
      .then((response) => {
        setUserData(response.data);
      })
      .catch(() => {
        setUserData(undefined);
      });
  }, [id.userId]);

  useEffect(() => {
    axios(`http://localhost:3000/user/${id.userId}/activity`)
      .then((response) => {
        setActivityData(response.data);
      })
      .catch(() => {
        setActivityData(undefined);
      });
  }, [id.userId]);

  useEffect(() => {
    axios(`http://localhost:3000/user/${id.userId}/average-sessions`)
      .then((response) => {
        setAverageData(response.data);
      })
      .catch(() => {
        setAverageData(undefined);
      });
  }, [id.userId]);
  useEffect(() => {
    axios(`http://localhost:3000/user/${id.userId}/performance`)
      .then((response) => {
        setperformanceData(response.data);
      })
      .catch(() => {
        setperformanceData(undefined);
      });
  }, [id.userId]);
  /*
  If data === undefined, there is a problem with the API, returned code 500, Internal server error
  If !data, user not find
  If all okay, return page, aka Main component, with fetch data 
  */
  /* if (data === undefined) return <ErrorAPI />
  if (!data) return <ErrorNoUser /> */

  if (
    userData != null &&
    activityData != null &&
    averageData != null &&
    performanceData != null
  ) {
    let alldatas = {};
    alldatas = {
      data: userData.data,
      activity: activityData.data,
      average: averageData.data,
      performance: performanceData.data,
    };
    return <Dashboard data={alldatas} />;
  }
};

export default Data;
