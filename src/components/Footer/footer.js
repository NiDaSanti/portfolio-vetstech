import React from "react";
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  const visionStatement = "VetsTech LLC is Veteran owned and operated " +
                                  "technology company created to build, educate, " +
                                  "help and empowered veterans through innovation and technology";

  const footerStyles = {
    marginTop: "2rem",
    backgroundColor: "#81b1ce",
    color: "#fff",
    height: "auto",
  };
  return(
    <div style={footerStyles}>
      <h4>Copyright &copy; {year}, VetsTech LLC.</h4>
    </div>
  );
};
export default Footer;
