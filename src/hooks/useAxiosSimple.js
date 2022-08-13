import axios from "axios";
const baseURL = "http://86.106.142.102";

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
