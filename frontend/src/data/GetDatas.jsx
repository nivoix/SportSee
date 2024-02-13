import { useEffect, useState } from "react";
import axios from "axios";
import Error from "../pages/Error";

const useData = (url) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => setUserData(data.data))
      .catch((error) => console.log(error))
      .finally(() => {
        return <Error />;
      });
  }, [url]);
  return userData;
};
export default useData;
