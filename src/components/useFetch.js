import { useState, useEffect } from "react";
const API_ENDPOINT = "https://www.omdbapi.com/?apikey=7ef8a648";

const useFetch = (urlParams) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const fetchMovies = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") {
        setData(data.Search || data);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies(`${API_ENDPOINT}${urlParams}`);
  }, [urlParams]);
  return { loading, data };
};

export default useFetch;
