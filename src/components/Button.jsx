import React, { Component } from 'react';

class Button extends Component{
 

    
 styles={
     width: 400,
     height:200
 }

 rowMargin = {
     marginTop: 12
}




     render() {
         const  floatDiv ={
             marginTop:"-168px"
         }

        const floatBtn ={
            borderRadius: "26.5px",
            backgroundColor: "#271AC1",
            border: "1px solid #271AC1",
            boxShadow: "0 16px 22px -17px #03153b",
            color: "#fff",
            cursor: "pointer",
            fontSize: "16px",
            lineHeight: "20px",
            padding: "12px 20px",
            zIndex: "999",
            marginTop: "21px",
            marginLeft:"40em"
        }
         return (
             <React.Fragment>
                <div style={floatDiv }>
                    <button class="floating-btn" style={floatBtn}>
                        Load More
                    </button>
                </div>
                 
            </React.Fragment>
         );
     }
     
   
} 
export default Button;