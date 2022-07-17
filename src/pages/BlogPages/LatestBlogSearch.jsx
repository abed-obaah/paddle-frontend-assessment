import React from 'react';
// import "../style.css"
import {FaSearch } from "react-icons/fa";


function LatestBlogSearch() {
    const item ={
        color:"#000",
        backgroundColor:"#fff",
        padding:"48px"
        
    }

    const latestBlogSearch ={
        display: "flex",
        color: "rgb(0, 0, 0)",
        alignContent: "stretch",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        marginRight: "-1378em",
        justifycontent: "space-between",
    }
    
    const searchFocus ={
        outline:"#000",
        border:"1px solid black",
        letterSpacing: "0.66px"
    }
    const latestBlogPara ={
        letterSpacing: "0.66px"
    }

    const latestBlogSearchInput ={
        width: "353px",
        borderRadius: "51px",
        height: "31px",
        letterSpacing: "0.66px",
        padding: "24px",
        marginTop: "12px"
    }

    const latestBlogSearchInputBtn ={
        position: "relative",
        top: "5px",
        left: "-46px",
        fontSize: "23px"

    }
    
    return(
        <div className="item" style={item}>
            <div>
                <h4>Latest From The Blog</h4>
            </div>
                
                <div className='latestBlog' style={latestBlogSearch}>
                    <div className='latestBlogPara' style={latestBlogPara}>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Iste, quibusdam? Harum quia excepturi maiores beatae nobis doloribus esse rerum sapiente.</p>
                    </div>
                   
                    <div class="input-group"  >
                        <div>
                            <input type="search" name="" style={latestBlogSearchInput} placeholder="search here" id="" />
                            <FaSearch style={latestBlogSearchInputBtn} />
                        </div>
                    </div>
                </div>
        </div>
       
    )
}

export default LatestBlogSearch;