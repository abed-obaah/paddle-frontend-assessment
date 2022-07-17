import React, { Component } from 'react';

// const ProductList(){
//     this.state.
// }
class Product extends Component{


    
 styles={
     width: 400,
     height:200
 }

 rowMargin = {
     marginTop: 12
}

     render() {
         const row = {
             boxShadow:"5px 10px #888888"
         }
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
                    <div className="column" >
                        <div className="card">
                            <img style={this.styles} src="malte-helmhold-O7rDKJQdgOw-unsplash.jpg" alt="logo" />
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
                        {/* <button onClick={this.myFunction} className='btn' >Add to cart</button> */}
                    </div>
                </div>
            </React.Fragment>
         );
     }
     
   
} 

// function Product() {
//     state = {
//         ProductList :[ {id:1, value: 'bags'},
//                       {id:2, value: 'shoes'},
//                       {id:3, value: 'caps'},
//                       {id:4, value: 'shirts'}
//                     ]
//     };
//         return (
//             <div>
//                 <div>
//                     <h1>Product list</h1>
//                     <img src="" alt="product List" />
//                     <button>Add to cart</button>
//                 </div>
//             </div>
//         );

// }
export default Product;