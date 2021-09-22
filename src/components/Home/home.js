import React, {useState} from "react";
import {Carousel} from "react-carousel-minimal";
const Home = () => {
  const data = [
    {
      image: "soldier-996536_1920.jpg",
    },
    {
      image: "veteran-1807121.jpg",
    },
    {
      image: "veterans-day-4653833_1920.jpg",
    },
    {
      image: "computer-4796017_1920.jpg",
    },
    {
      image: "dual-screen-1745705.png",
    },
    {
      image: "programmer-1653351.png",
    },
    {
      image: "web-3967926_1920.jpg",
    },
  ];
  const customStyles = {
    textAlign: "center",
    maxWidth: "auto",
    maxHeight: "500px",
    margin: "40px auto",
  };
  const cardStyle = {
    width: "auto",
    marginLeft: "10px",
    marginRight: "10px",
  };
  const makeStrong = {
    fontWeight: "bold",
  };
  const missionStatementText = "To build, educate,help and " +
                               "empowered veterans through " +
                               "innovation and technology.";

    return(
    <>
      <Carousel
        data={data}
        time={2000}
        width="auto"
        height="500px"
        radius="none"
        slideNumber={false}
        automatic={true}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="white"
        slideImageFit="cover"
        thumbnails={false}
        thumbnailsWidth="100px"
        style={customStyles}
      />
      <div className="card" style={cardStyle}>
        <div className="card-body">
          <h3 style={makeStrong}>{missionStatementText}</h3>
        </div>
      </div>
    </>
  );
}
export default Home;
