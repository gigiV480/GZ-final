import React from "react";
import SearchForm from "../components/Search-form";
import { Link } from "react-router-dom";
import useCountrySearch from "../hooks/use-country-search";
const CountrySearch = () => {
  const { searchResults, loading, error, searchCountry } = useCountrySearch();

  const handleSearch = (countryName) => {
    searchCountry(countryName);
  };

  return (
    <div>
      <h2>Country Search</h2>
      <SearchForm onSubmit={handleSearch} />

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {searchResults && (
        <ul>
          {searchResults.map((country) => (
            <li key={country.cca3}>
              <p>{country.name.common}</p>
              <Link to={`/details/${country.cca3}`}>View Details</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CountrySearch;
