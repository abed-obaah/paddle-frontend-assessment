import React from 'react';
// import "../style.css"


function LatestBlog() {
    const item ={
        color:"#fff"
        
    }
    return(
        <div className="item" style={item}>
           
                   <div className="aboutHead">
                        <div className="lines"></div>
                        <h2>BLOG</h2>
            </div>
            <div className="aboutMain">
                    <h1>Articles and News</h1>
            </div>
            <div className="bgBlur">
                    <div className="bgBox">
                    
                    </div>
             </div>
        </div>
       
    )
}

export default LatestBlog;