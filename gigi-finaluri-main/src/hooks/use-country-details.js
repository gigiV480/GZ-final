import { useState, useEffect } from "react";

const useCountryDetails = (countryCode) => {
  const [countryDetails, setCountryDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountryDetails = async () => {
      setLoading(true);
      try {
        // Perform your API request for country details here
        const response = await fetch(
          `https://restcountries.com/v3.1/alpha/${countryCode}`
        );
        const data = await response.json();

        setCountryDetails(data[0]);
      } catch (err) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchCountryDetails();
  }, [countryCode]);

  return { countryDetails, loading, error };
};

export default useCountryDetails;
