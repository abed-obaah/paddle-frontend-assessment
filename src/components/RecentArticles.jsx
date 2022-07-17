import React, { Component } from 'react';

class RecentArticles extends Component{
    
 styles={
     width: 400,
     height:200
 }

 rowMargin = {
     marginTop: 12
}

     render() {
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

        const latestBlogPara ={
            letterSpacing: "0.66px"
        }

         return (
             <React.Fragment>
              <div className="item" style={item}>
            <div>
                <h4>Recent Articles</h4>
            </div>
                
                <div className='latestBlog' style={latestBlogSearch}>
                    <div className='latestBlogPara' style={latestBlogPara}>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Iste, quibusdam? Harum quia excepturi maiores beatae nobis doloribus esse rerum sapiente.</p>
                    </div>
                </div>
        </div>
            </React.Fragment>
         );
     }
     
   
} 

export default RecentArticles;