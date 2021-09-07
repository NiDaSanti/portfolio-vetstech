import React from "react";
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  const footerStyles = {
    marginTop: "2rem",
    backgroundColor: "#81b1ce",
    color: "#fff",
  };
  return(
    <div style={footerStyles}>
      <p>Copyright &copy; {year}, VetsTech LLC.</p>
    </div>
  );
};
export default Footer;
