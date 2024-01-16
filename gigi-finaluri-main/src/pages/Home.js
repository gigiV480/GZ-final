import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Country Explorer App</h1>
      <p>Explore countries around the world.</p>
      <Link to="/search">Go to Search</Link>
    </div>
  );
};

export default Home;
