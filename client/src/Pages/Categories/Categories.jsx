import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getStreams } from "../../store/actions/actions";
import Navbar from "../../components/NavBar/NavBar";
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
        <>
            <Navbar />
            <div className="title2">
                <h2>Category {filterCategories[0].name}</h2>
            </div>
            <div className="container2">
                {filterStream && filterStream.map((c, index) => <div className="card-container2" key={index}>
                    <div>
                    <div className="header2">
                        <img src={c.image} />
                        <p>{c.user}</p>
                    </div>
                    <p>{c.category}</p>
                    <p>{c.contents}</p>
                    <div className="description2">
                    <p>{c.name}</p>
                    <p>{c.description}</p>
                    <div>
                    <p>{c.rules}</p>
                    <p>{c.suscriptores}</p>
                    </div>
                    </div>
                    </div>
                </div>)}
            </div>
        </>
    )
}

export default Categories;