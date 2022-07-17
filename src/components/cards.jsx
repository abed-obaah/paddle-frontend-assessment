import React from 'react';
import "../style.css"

function Card(props) {
    return(
        <div className="card">
            <div className="card_body">
                <img src={props.img} alt="avater.png" />
                <h2 className="card_title">hello</h2>
                <p className="card_description">
                    Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
                <button className="btn">read more</button>
            </div>
        </div>
    )
}

export default Card;