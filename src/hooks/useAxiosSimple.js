import axios from "axios";
const baseURL = "http://127.0.0.1:8000";

const useAxiosSimple = () => {
  const axiosInstance = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  axiosInstance.interceptors.request.use(async (req) => {
    return req;
  });

  return axiosInstance;
};

export default useAxiosSimple;
