import React from 'react';
import "../style.css";
import '../App.css'

function ThirdAbout() {
    const item ={
        color:"#fff",
        marginRight: "-166px",
        marginLeft: "166px"
    }

    const mainPara = {
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center"

      }
      const aboutMainParaBlur ={
        background: "transparent linear-gradient(180deg, #213F72 0%, #19073B 100%) 0% 0% no-repeat padding-box",
            opacity: "1",
            backdropFilter: "blur(16px)",
            width: "98em",
           height: "20em",
             zIndex: "1",
             marginRight: "155px"
    }
      const aboutNum ={
          borderBottom:"2px solid #fff",
          width: "70px",
          position: "relative",
          marginRight: "12px",
          display: "flex",
          justifyContent: "flex-start",
          alignContent: "center",
          alignItems: "center"
      }

      const header ={
          display: "flex"
      }

      const headerHero ={
          padding:"38px"
      }

      const headerHero1 ={
          padding:"38px",
          marginRight:"21em"
      }

      const BlueBox ={
                marginTop: "-38px",
            backgroundColor: "#213f72",
            width: "266px",
            height: "241px",
            marginLeft: "31em",
            filter: "blur(8px)",
            backdropFilter: "blur(16px)",
            position: "relative",
            top: "-229px",
            left: "-303px",
            opacity: .34
    }
    const dots = require('../images/newsletter-shape.png')
    return(
        <div className="itemx" style={item}>
               <div className="mainPara" style={mainPara}>
                    <div style={headerHero1} >
                        <div className='header' style={header}>
                        
                            <div>
                                <div className="aboutNum" style={aboutNum}>01</div>
                            </div>
                            <h3>why us?</h3>
                        </div>
                            <p>
                            We pride ourselves in our ability to innovate and create world-class tools that provide reliable and efficient touchpoints between advertisers and<br/> affiliates.
                            </p>

                            <img src={dots} alt="" />
                    </div>
                            
                        <div style={aboutMainParaBlur} className="aboutMainParaBlur" >
                            <div style={headerHero}>
                                <div className='header' style={header}>
                                        <span className="aboutNum" style={aboutNum}>02</span>
                                        <h3 className='AboutNumGro'>Growing with you</h3>
                                </div>
                               
                                <div>
                                    <p>
                                        Leveraging the best technology, we have developed an all-in-one affiliate marketing tracking software, a genius tool to help you track, automate and optimize your influencer campaigns, all from one dashboard.
                                    </p>
                                </div>
                                <div>
                                        <p>
                                            Our team of experts are constantly brainstorming, testing and developing new solutions with only one thing in mind - your business growth. Your success is our success and by giving you the tools you need to scale, we grow as well.
                                        </p>
                                </div>
                                
                                
                         </div>
                         <div className='BlueBox' style={BlueBox}></div>
                         
                     </div>
                   
            </div>
        </div>
       
    )
}

export default ThirdAbout;