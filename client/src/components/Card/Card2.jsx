import React from "react";
import '../Card/Card.css'
import { Link } from "react-router-dom";

function Card( id ) {
    return(
            <div key={id} className="container">
                <div className="card-container">
                    <div className="header">
                            <Link to={"/stream/"+id.id}>
                            <img alt="" src={id.image}/>
                            </Link>
                        <h2>
                          {id.name}
                        </h2>
                    </div>
                    <div className="description">
                        <p>
                           am, nisi accusamus qui magni eveniet consequatur id quo quas ullam enim minus dolorem quae ad ipsum!
                        </p>
                    <div className="social">
                    </div>
                    </div>
                </div>
            </div>
           
            )
            


}
export default Card;
