import React from 'react';
import "../style.css"

function FirstAbout() {
    const item ={
        color:"#fff"
        
    }
    return(
        <div className="item" style={item}>
           
                   <div className="aboutHead">
                        <div className="lines"></div>
                        <h2>ABOUT US</h2>
            </div>
            <div className="aboutMain">
                    <h1>Built for Saas <br/> and E-commerce</h1>
            </div>
            <div className="bgBlur">
                    <div className="bgBox">
                    
                    </div>
             </div>
        </div>
       
    )
}

export default FirstAbout;