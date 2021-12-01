import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fetched, setFetched] = useState(false);
  const [val, setVal] = useState(1);
  const [newData, setNewData] = useState([]);

  function getUnique(arr, index) {
    const unique = arr
      .map((e) => e[index])
      .map((e, i, final) => final.indexOf(e) === i && i)

      .filter((e) => arr[e])
      .map((e) => arr[e]);

    return unique;
  }

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);
    if (!response.ok) return setError(true);

    setError(false);

    if (val === 1) {
      setData([]);
      setNewData([]);
      console.log("before setting data: " + val);
      setData(response.data.items);
      setNewData(response.data.items);
      setVal(val + 1);
    } else {
      console.log("setting data: " + val);

      setNewData(newData.concat(response.data.items));

      setData(getUnique(newData, "id"));

      //setData(data.push.prototype(...response.data.items));
    }
    setFetched(true);
  };

  return { data, setData, error, loading, request, fetched, setVal };
};
