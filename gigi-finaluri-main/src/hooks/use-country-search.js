import { useState } from "react";

const useCountrySearch = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchCountry = async (countryName) => {
    setLoading(true);
    try {
      // Perform your API request here using fetch or any other method
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
      const data = await response.json();
      console.log(data, "data");
      if (data.status == 404) {
        throw Error("country couldnot be searched");
      }
      setSearchResults(data);
    } catch (err) {
      console.log("error");
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return { searchResults, loading, error, searchCountry };
};

export default useCountrySearch;
