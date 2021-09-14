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
  const missionStatementText = "Mission Statement: Outlines the" +
                               "organization’s targeted, operational," +
                               "and strategic intent, through which actions" +
                               "for today can be given context, urgency and meaning.";

  const companyMissionStatement = "VetsTech LLC is Veteran owned and operated" +
                                  "technology company created to build, educate," +
                                  "help and empowered veterans through innovation and technology";

  const visionMissionStatement = "Vision Statement: Provides a picture of an" +
                                 "organization’s preferred future in order to" +
                                 "give its people an enduring, deep and inspiring purpose";

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
          <p>{missionStatementText}</p>
          <p>{companyMissionStatement}</p>
          <p>{visionMissionStatement}</p>
        </div>
      </div>
    </>
  );
}
export default Home;
