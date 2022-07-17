import React from 'react';
// import "../style.css"


function BlogPost() {
    const item ={
        color:"#000"
        
    }

    const card = {
            boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)",
            transition:"0.3s",
            marginTop: "13em"
    }

    const container = {
        padding: "2px 16px"
      }

    return(
        <div className="item" style={item}>
          <div className='row'>
                <div className="column">
                    <div className="card" style={card}>
                        <img src="" alt="avatar.png" />
                        <div className="container" style={container}>
                            <h5>12 Popup Use Cases To Increase Conversions</h5>
                            <p>orem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum</p>
                            <div>
                                <div></div>
                                <p>READ MORE</p>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
        </div>
       
    )
}

export default BlogPost;