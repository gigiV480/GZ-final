import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CountryDetails from "./pages/Country-details";
import CountrySearch from "./pages/Country-search";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<CountrySearch />} />
        <Route path="/details/:countryCode" element={<CountryDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
