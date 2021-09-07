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
          Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor condimentum orci suscipit. Leo maecenas in tristique, himenaeos elementum placerat. Taciti rutrum nostra, eget cursus velit ultricies. Quam molestie tellus himenaeos cubilia congue vivamus ultricies. Interdum praesent ut penatibus fames eros ad consectetur sed Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius; dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare. Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
        </div>
      </div>
    </>
  );
}
export default Home;
