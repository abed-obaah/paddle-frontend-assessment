import React from 'react';
import "../style.css"

function SecondAbout() {
    const item ={
        color:"#fff"
    }
    const SecondAbout ={
        display: 'flex',
        alignContent: 'space-around',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        marginTop: "-180px"
    }

    const aboutMainPara = {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        fontSize: '36px'
    }
   
    return(
        <div className="itemx" style={item}>
                <div className="aboutPara" style={SecondAbout}>
                    <p>
                    Our tools are easy to set up and use with a user <br/>friendly dashboard that enables you to set up,<br/> launch, automate and manage multi-affiliate <br/>campaigns in 5 minutes.
                    </p>
            </div>
                <div>
                <div className="aboutMainPara" style={aboutMainPara}>
                <p>
                Metricks was developed because just like <br /> you, we needed a product that could give<br /> us <span>good value. </span> 
                </p>
            </div>
                </div>
            
        </div>
       
    )
}

export default SecondAbout;