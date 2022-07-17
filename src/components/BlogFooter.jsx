import React from 'react';
import {FaYoutube,FaFacebook,FaLinkedinIn,FaInstagram,FaTwitter } from "react-icons/fa";
import "../style.css"

function BlogFooter() {
    const item ={
        color:"#000",
        backgroundColor:"#fff"
    }

    const condit ={
        color:"#000"
    }
    return(
        <div className="item" style={item}>
             <div className="icons">
                <div className="icon1"><FaYoutube  /> </div>
                <div className="icon1"><FaFacebook /> </div>
                <div className="icon1"><FaLinkedinIn /> </div>
                <div className="icon1"><FaInstagram /> </div>
                <div className="icon1"><FaTwitter /> </div>
              
            </div>
             <div className="condit">
                <div style={condit}>
                    <p>
                        Terms of services
                    </p>
                </div>
                <div style={condit}>
                    <p>
                        Privacy policy
                    </p>
                </div>
            </div>

            <div className="condit">
                <div style={condit}>
                    <p>
                        Copyright 2021 @ Peddle Technologies. All Rights Reserved
                    </p>
                </div>
                
            </div>
        </div>
       
    )
}

export default BlogFooter;