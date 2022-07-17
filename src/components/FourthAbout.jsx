import React from 'react';
import "../style.css"
import Footer from "../components/Footer.jsx";
import { FaArrowRight } from "react-icons/fa";

function FourthAbout() {
    const aboutHeadFourth ={
        marginTop: "224px",
        marginBottom: "17em",
        marginLeft: "-12em",
        padding: "12px 5px 37px 147px",
        width: "98em",
        height: "20em",
        color: "rgb(245, 245, 245)",
        letterSpacing: "0.92px",
        opacity: 1,
        background: "linear-gradient(rgb(33, 63, 114) 0%, rgb(25, 7, 59) 100%) 0% 0% no-repeat padding-box padding-box transparent",
        backdropFilter: "blur(16px)"
    }

    const aboutHeadFourthpara = {
        paddingTop:'12px'
    }

    const spanDiv ={
        display: 'flex',
        justifyContent: 'flex-start',
        alignContent: 'center',
        alignItems: 'baseline',
        flexWrap: 'nowrap',
        flexDirection: 'row',
    }

    const span ={
        color:"#FF00F7"
    }

    const spanArrow ={
        marginLeft:'12px',
        color:"#FF00F7"

    }

    const YellowBox ={
        marginTop: "-38px",
        backgroundColor: "#7f4129",
        width: "266px",
        height: "241px",
        marginLeft: "31em",
        filter: "blur(8px)",
        backdropFilter: "blur(16px)",
        marginTop: "-38px",
        position: "relative",
        top: "-132px",
        left: "34em"
    }

    return(
        <div className="item itemDiv">
                   <div className="aboutHeadFourth" style={aboutHeadFourth}>
                        <h1>Got a Question?</h1>
                        <p style={aboutHeadFourthpara}>See how Metricks can help your business grow with best Affiliate Marketing Tracking <br/> Software.</p>
                        <div style={spanDiv} >
                            <p style={span}>Contact Us  </p>
                            <p style={spanArrow} > <FaArrowRight  className="arrow" /></p>
                          </div>
                          <div className='YellowBox' style={YellowBox}></div>
            </div>
            <Footer/>
        </div>
       
    )
}

export default FourthAbout;