import { useEffect, useState } from "react";

const useFetch = (
  url: string,
  methodType: string,
  body: any,
  operation: any
) => {
  const [FetchedData, setData] = useState([]);
  useEffect(() => {
    fetch(url, {
      method: methodType,
      headers: {
        "Content-Type": "application/json",
      },
      body,
    })
      .then((res) => res.json)
      .then((data: any) => {
        operation;
        setData(data);
      });
  }, []);

  return FetchedData;
};

export default useFetch;
