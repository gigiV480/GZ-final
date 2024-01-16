import React from "react";
import { useParams } from "react-router-dom";
import useCountryDetails from "../hooks/use-country-details";
const CountryDetails = () => {
  const { countryCode } = useParams();
  const { countryDetails, loading, error } = useCountryDetails(countryCode);
  console.log(countryDetails);
  return (
    <center>
      <div>
        <h2>Country Details</h2>

        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}

        {countryDetails && (
          <div>
            <h3>{countryDetails.name.common}</h3>
            <p>Capital: {countryDetails.capital[0]}</p>
            <p>area: {countryDetails.area}</p>
            <div>
              borders :{" "}
              {countryDetails.borders?.map((brd) => (
                <span>{brd}, </span>
              ))}
            </div>
            <p>region:{countryDetails.region}</p>

            <img
              style={{ width: "150px" }}
              src={countryDetails.coatOfArms.png}
            />

            {/* Add more details based on your API response */}
          </div>
        )}
      </div>
    </center>
  );
};

export default CountryDetails;
