import { useState, useEffect, useContext } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import AuthContext from "../components/context/AuthContext";

const baseURL = "http://127.0.0.1:8000";

const useAxios = () => {
  const { authTokens, setUser, setAuthTokens } = useContext(AuthContext);

  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState(0);

  const axiosFetch = async (configObj) => {
    const { axiosInstance, method, url, requestConfig = {} } = configObj;

    const user = jwt_decode(authTokens.access);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

    let accessToken = authTokens?.access;

    if (isExpired) {
      const response = await axios.post(`${baseURL}/api/token/refresh/`, {
        refresh: authTokens.refresh,
      });

      localStorage.setItem("authTokens", JSON.stringify(response.data));

      setAuthTokens(response.data);
      setUser(jwt_decode(response.data.access));

      accessToken = response.data.access;
    }

    try {
      setLoading(true);
      const res = await axiosInstance[method.toLowerCase()](url, {
        ...requestConfig,
        headers: { Authorization: `JWT ${accessToken}` },
      });
      console.log(res);
      setResponse(res.data);
      if (res.data.count) {
        if (res.data.next != null)
          setPageCount(Math.ceil(res.data.count / res.data.results.length));
      } else {
        setPageCount(-1);
      }
      setError("");
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  }, []);

  return [response, pageCount, error, loading, axiosFetch];
};

export default useAxios;
