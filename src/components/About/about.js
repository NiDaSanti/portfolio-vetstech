import React from "react";
import "./styles.css";

const About = () => {
  return(
    <div className="container">
      <div className="card" >
        <img className="card-img-top" src="IMG_5155.jpg" alt="Kofa"/>
          <div className="card-body">
            <h3 className="text-primary">Kofa Freeman</h3>
            {/*<p className="card-text">Kofa is a ten year veteran and a Business Professional.</p>*/}
            <address><a href="mailto:freeman@vetstechnology.com">freeman@vetstechnology.com</a></address>
          </div>
      </div>

      <div className="card">
        <img className="card-img-top" src="IMG_8147.jpg" alt="Nick"/>
          <div className="card-body">
            <h3 className="text-primary">Nick Santiago</h3>
            {/*<p className="card-text">Nick is a ten year veteran and currently a Software Developer.</p>*/}
            <address><a href="mailto:santiago@vetstechnology.com">santiago@vetstechnology.com</a></address>
          </div>
        </div>

      <div className="card">
        <img className="card-img-top" src="laptop-in-the-car-picjumbo-com.jpg" alt="Dee"/>
          <div className="card-body">
            <h3 className="text-primary">Deenilson Velazquez</h3>
            {/*<p className="card-text">Nick is a ten year veteran and currently a Software Developer.</p>*/}
            <address><a href="mailto:velazquez@vetstechnology.com">velazquez@vetstechnology.com</a></address>
          </div>
        </div>

      <div className="card">
        <img className="card-img-top" src="tev.PNG" alt="Curtis"/>
          <div className="card-body">
            <h3 className="text-primary">Tev Curtis</h3>
            {/*<p className="card-text">Nick is a ten year veteran and currently a Software Developer.</p>*/}
            <address><a href="mailto:curtis@vetstechnology.com">curtis@vetstechnology.com</a></address>
          </div>
        </div>
      </div>
  );
}
export default About;
