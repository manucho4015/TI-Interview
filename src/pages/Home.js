import React from "react";

// redux
import { useSelector } from "react-redux";

// components
import Card from "../components/Card";
import ActionBar from "../components/ActionBar";

const Home = () => {
  const { total, professionalsArray } = useSelector((store) => store.home);

  return (
    <section className="home-page">
      <ActionBar />
      <div className="counter">
        <h2 className="counter">Total Professionals: {`( ${total} )`}</h2>
      </div>
      <div className="card-grid">
        {professionalsArray.map((professional, index) => {
          return <Card key={index} {...professional} />;
        })}
      </div>
    </section>
  );
};

export default Home;
