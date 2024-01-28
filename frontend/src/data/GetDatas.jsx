import { useEffect, useState } from "react";
import axios from "axios";

function useData(url) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (url) {
      axios
        .get(url)
        .then((response) => response.data)
        .then((data) => {
          setUserData(data.data);
        });
    }
  }, [url]);
  return userData;
}
export default useData;
