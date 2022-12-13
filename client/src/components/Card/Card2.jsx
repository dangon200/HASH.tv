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
                       USUARIO
                        </h2>
                        <h4>
                        NOMBRE DEL CANAL
                        </h4>
                    </div>
                    <div className="description">
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia illo porro, natus illum temporibus qui, cumque perspiciatis voluptates aliquam, quisquam minima commodi explicabo sit expedita dignissimos? Adipisci, enim! Eaque, nobis.
                        </p>
                    <div className="social">
                        <button className="button">
                            Ir
                        </button>
                    </div>
                    </div>
                </div>
            </div>
           
            )
}
export default Card;
