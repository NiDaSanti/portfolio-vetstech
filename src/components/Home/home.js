import React, {useState} from "react";
import {Carousel} from "react-carousel-minimal";
const Home = () => {
  const cardStyle = {
    width: "auto",
    marginLeft: "auto",
    marginRight: "auto",
  };
  const makeStrong = {
    fontWeight: "bold",
  };
  const contain = {
    position: "absolute",
    top: "35%",
    left: "33.3%",
    tranformed: "translate(-50%, -50%)",
    color: "#fff",
    width: "50rem",
  };
  const stylePic = {
    width: "auto",
    height: "800px",
  };
  const text = {
    fontSize: "2.5rem",
  }
  // const styleStatement = {
  //   width: "30rem",
  //   height: "40rem",
  // };
  const missionStatementText = "To build, educate, help and " +
                               "empowered veterans through " +
                               "innovation and technology.";
    return(
    <>
      <div className="card" style={cardStyle}>
        <img src="soldier-996536_1920.jpg" style={stylePic} className="img-fluid" alt="Soldier Soluting" />
        <article style={contain}>
          <h1 style={text}>Mission</h1>
          <h2 style={text}><q>{missionStatementText}</q></h2>
        </article>
      </div>
    </>
  );
}
export default Home;
