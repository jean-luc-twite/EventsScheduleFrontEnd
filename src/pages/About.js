import React from "react"; 
import Breadcrumb from "../components/Breadcrumb"; 
import FooterOne from "../components/FooterOne";  
import AboutAreaTwo from "../components/AboutAreaTwo";

const About = () => {
  return (
    <>
     

      {/* Navigation Bar */}
      <Breadcrumb title={"About Us"} />

      {/* About Area One */}
      <AboutAreaTwo /> 
 
 
     
      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default About;
