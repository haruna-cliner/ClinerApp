import { useState } from "react";

let useApi = (apiFunc) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    setError(false);
    const response = await apiFunc(...args);
    setLoading(false);

    // console.log('Url', response.config, response.data);

    setError(!response.ok);
    setData(response.data);
    return response;
  };

  const changeData = (value = {}) => {
    setData(value);
  };


  return { data, error, loading, request, changeData };
};
export default useApi;
