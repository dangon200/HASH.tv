import React from "react";
import '../Card/Card.css'
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Card() {
    const streams = useSelector(state => state.streams)
    const streams3 = streams.slice(0, 3)
    // console.log(streams3)
    // console.log(streams)
    return (
        <>
            <div className="title">
                <h2>Canales en directo que podrían gustarte</h2>
            </div>
            <div className="container">
        {streams3?.map((e, index) =>{
            return(
                <div key={index} className="card-container">
                    <div className="header">
                            <Link to={"/stream/"+ e._id}>
                            <img alt="" src={e.image}/>
                            </Link>
                        <h2>
                          {e.user}
                        </h2>
                        <h4>
                            Lenguaje
                        </h4>
                    </div>
                    <div className="description">
                        <p>
                           am, nisi accusamus qui magni eveniet consequatur id quo quas ullam enim minus dolorem quae ad ipsum!
                        </p>
                    <div className="social">
                    </div>
                    </div>
                </div>
    
      
           
            )
        })}
            </div>
        </>
    )
}
export default Card;
