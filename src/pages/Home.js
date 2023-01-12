import React from "react";

import Card from "../components/Card";
import ActionBar from "../components/ActionBar";

// import {fetchProfessionals} from '../../api/GET'

const Home = () => {
  const trial = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <section className="home-page">
      <ActionBar />
      <div className="counter">
        <h2 className="counter">
          Total Professionals: {`( ${trial.length} )`}
        </h2>
      </div>
      <div className="card-grid">
        {trial.map((item) => {
          return <Card />;
        })}
      </div>
    </section>
  );
};

export default Home;
