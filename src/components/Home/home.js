import React, {useState} from "react";
import {Carousel} from "react-carousel-minimal";
import "./home.css";
const Home = () => {
  const missionStatementText = "To build, educate, help and " +
                               "empowered veterans through " +
                               "innovation and technology.";
    return(
    <>
      <div className="card-style">
        <img src="soldier-996536_1920.jpg" className="img-fluid custom-soldier" alt="Soldier Soluting" />
        <article className="contain">
          <h1 className="text">Mission</h1>
          <h2 className="text"><q>{missionStatementText}</q></h2>
        </article>
      </div>
    </>
  );
}
export default Home;
