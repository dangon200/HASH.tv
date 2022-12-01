import React from "react";
import '../Card/Card.css'
import { Link } from "react-router-dom";

function Card( id ) {
    return(
            <div key={id} className="container">
                <div className={'card-container'} >
                    <div className="header">
                            <Link to={"/stream/"+id.id}>
                            <img alt="" src={id.image}/>
                            </Link>
                        <h2>
                          {id.name}
                        </h2>
                        <h2>
                          {id.language}
                        </h2>
                    </div>
                    <div className="description">
                        <p>
                        {id.description}
                        </p>
                    <div className="social">
                    </div>
                    </div>
                </div>
            </div>
           
            )
}
export default Card;
