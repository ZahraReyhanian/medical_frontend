import { useState, useEffect } from "react";

const useAxios = () => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [controller, setController] = useState();
  const [pageCount, setPageCount] = useState(0);

  const axiosFetch = async (configObj) => {
    const { axiosInstance, method, url, requestConfig = {} } = configObj;

    try {
      setLoading(true);
      const ctrl = new AbortController();
      setController(ctrl);
      const res = await axiosInstance[method.toLowerCase()](url, {
        ...requestConfig,
        signal: ctrl.signal,
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
    console.log(controller);

    // useEffect cleanup function
    return () => controller && controller.abort();
  }, [controller]);

  return [response, pageCount, error, loading, axiosFetch];
};

export default useAxios;
