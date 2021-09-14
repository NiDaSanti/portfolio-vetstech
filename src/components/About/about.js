import React from "react";
import "./styles.css";
const About = () => {
  const increaseWidthOfCard = {
    width: "50rem",
  };
  const customImageStyles = {
    height: "15rem",
  };
  return(
    <div className="container">
      <div className="bio-container">
        <div className="card">
          <img className="card-img-top" src="IMG_8147.jpg" alt="Nick"/>
            <div className="card-body">
              <h2 className="text-danger">Nick Santiago</h2>
              <p className="card-text">Nick is a ten year veteran and currently a Software Developer.</p>
            </div>
          </div>
          <div className="card" style={increaseWidthOfCard}>
            <div className="card-body">
            Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor condimentum
            orci suscipit. Leo maecenas in tristique, himenaeos elementum placerat. Taciti rutrum nostra,
            eget cursus velit ultricies. Quam molestie tellus himenaeos cubilia congue vivamus ultricies.
            Interdum praesent ut penatibus fames eros ad consectetur sed
            </div>
          </div>
        </div>
      <div className="bio-container">
        <div className="card" >
          <img className="card-img-top" style={customImageStyles} src="IMG_5155.jpg" alt="Kofa"/>
            <div className="card-body">
              <h2 className="text-danger">Kofa Freeman</h2>
              <p className="card-text">Kofa is a ten year veteran and a Business Professional.</p>
            </div>
          </div>
          <div className="card" style={increaseWidthOfCard}>
            <div className="card-body">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
            dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
            Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
            sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
            </div>
          </div>
        </div>
    </div>
  );
}
export default About;
