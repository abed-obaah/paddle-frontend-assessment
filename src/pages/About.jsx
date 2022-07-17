import React from "react";
import FirstAbout from "../components/FirstAbout.jsx";
import SecondAbout from "../components/SecondAbout.jsx";
import ThirdAbout from "../components/ThirdAbout.jsx";
import FourthAbout from "../components/FourthAbout.jsx";



function About() {
//  const width ={
//      width:"100%"
//  }
    return (
        <div className="container" >
              <FirstAbout />
              <SecondAbout />
              <ThirdAbout />
              <FourthAbout/>
        </div>
       
    );
}

export default About;