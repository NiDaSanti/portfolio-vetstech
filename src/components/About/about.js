import React from "react";
import "./styles.css";
const About = () => {
  return(
    <div className="container">
      <div className="card" >
        <img className="card-img-top" src="IMG_8147.jpg" alt="Card image cap"/>
        <div className="card-body">
          <h2>Nicholas Santiago</h2>
          <p className="card-text">Nick is a ten year veteran and currently a Software Developer.</p>
        </div>
      </div>
      <div className="card" >
        <img className="card-img-top" src="IMG_8151.jpg" alt="Card image cap"/>
        <div className="card-body">
          <h2>Kofa Freeman</h2>
          <p className="card-text">Kofa is a ten year veteran and a Business Professional.</p>
        </div>
      </div>
    </div>
  );
}
export default About;
