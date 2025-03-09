import { useEffect, useState } from "react";

const useFetch = (url: string, methodType: string) => {
  const [FetchedData, setData] = useState([]);
  useEffect(() => {
    fetch(url, {
      method: methodType,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data: any) => {
        setData(data);
      });
  }, []);

  return FetchedData;
};

export default useFetch;
