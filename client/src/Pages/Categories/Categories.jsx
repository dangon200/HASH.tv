import React from "react";
import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import NavBarTop from "../../components/NavBarTop/NavBarTop";
import { getCategories, getStreams } from "../../store/actions/actions";
import "./Categories.css"

const Categories = (props) => {
    const categoriesId = props.match.params.id
    const dispatch = useDispatch()
    const allCategories = useSelector(state => state.categories)
    const allStreams = useSelector(state => state.streams)
    const filterCategories = allCategories.filter(c => c._id?.includes(categoriesId))
    const filterStream = allStreams.filter(e => e.category?.includes(filterCategories[0].name))

    useEffect(() => {
        dispatch(getCategories(categoriesId))
        dispatch(getStreams())
    }, [dispatch, categoriesId])

    return (
        <div className="categories-cnt">
            <NavBarTop />

            <div className="title2">
                <h2>Category {filterCategories[0].name}</h2>
            </div>
            <div className="container2">
                {
                    filterStream && filterStream.map((c, index) => 

                    <Card 
                        key={index}
                        style={{ 
                            width: '25em',
                            backgroundColor:'#00000043',
                            minHeight:'42em',
                            marginTop: '1em ',
                            marginBottom: '1em'
                        }}
                        className='container2'

                    >
                        <Card.Img 
                            className="header2"
                            variant="top" 
                            src={c.image} 
                        />
                        <Card.Body>
                            <Card.Title>{c.user}</Card.Title>
                            <Card.Text>
                                {c.category}
                            </Card.Text>
                            <Card.Text>
                                {c.contents}
                            </Card.Text>
                            <Card.Text>
                                {c.description}
                            </Card.Text>
                            <Card.Text>
                                {c.rules}
                            </Card.Text>
                            <Card.Text>
                                {c.suscriptores}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    // <div className="card-container2" key={index}>
                    //     <div>
                    //         <div className="header2">
                    //             <img src={c.image} />
                    //             <p>{c.user}</p>
                    //         </div>
                    //         <p>{c.category}</p>
                    //         <p>{c.contents}</p>
                    //         <div className="description2">
                    //             <p>{c.name}</p>
                    //             <p>{c.description}</p>
                    //             <div>
                    //                 <p>{c.rules}</p>
                    //                 <p>{c.suscriptores}</p>
                    //             </div>
                    //         </div>
                    //     </div>
                    // </div>
                )}
            </div>
        </div>
    )
}

export default Categories;