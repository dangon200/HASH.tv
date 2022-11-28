import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { filterCategories } from "../../store/actions/actions";
import '../CardCategori/CardCategori.css'
import { Link } from "react-router-dom";

function CardCategori() {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.categories)
    const categoriesSlice = categories.slice(0, 5)
    const handleCategories = (e) => {
        e.preventDefault()
        dispatch(filterCategories(e.target.value))
    }

    return (
        <>
            <div className="title">
                <h2>Categorías que podrían interesarte</h2>
            </div>
            <div className="container2">
                {categoriesSlice?.map((e, index) => {
                    return (
                        <div key={index}>
                            <Link to={`/categories/${e._id}`}>
                                <div className={e.name[0]} />
                            </Link>
                            <div>
                                <div className="content">
                                    <button onClick={handleCategories} value={e.name}>{e.name}</button>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </>
    )
}

export default CardCategori