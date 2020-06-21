import { useState, useEffect } from "react";
import yelp from "../api/yelp";

const useResults = () => {
  const [results, setResults] = useState([]);
  const [errMessage, setErrMessage] = useState("");

  const fetchResults = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      response.data.businesses.length
        ? setResults(response.data.businesses)
        : setErrMessage("Found nothing. Please try again");
    } catch (e) {
      setErrMessage("something went wrong");
    }
  };
  useEffect(() => {
    fetchResults("pasta");
  }, []);

  return [fetchResults, results, errMessage];
};

export default useResults;
