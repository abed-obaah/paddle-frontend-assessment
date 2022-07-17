// RecentArticleBlog
import React, { Component } from 'react';

class RecentArticleBlog extends Component{
    
 styles={
     width: 400,
     height:200
 }

 rowMargin = {
     marginTop: 12
}

     render() {
        const h4Style ={
            fontSize: "16.5px",
            marginLeft: "-12em",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }

        const desc ={
            marginLeft:"12px"
        }

         return (
             <React.Fragment>
                <div className="row" style={this.rowMargin}>
                    <div className="column">
                        <div className="card">
                            <h4 style={h4Style}>12 Popup Use Cases <br /> To Increase Conversions</h4>
                            <div className="desc" style={desc}>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum</p>
                                <div>
                                            <div>
                                                    <div></div>
                                                <p>READ MORE</p>
                                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
     }
     
   
} 
export default RecentArticleBlog;