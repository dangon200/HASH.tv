import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getStream } from "../../store/actions/actions";

const Categories = (props) => {
    const categoriesId = props.match.params.id
    const dispatch = useDispatch()
    const allCategories = useSelector(state => state.categories)
    const allStreams = useSelector(state => state.stream)

    useEffect(() => {
        dispatch(getCategories(categoriesId))
        dispatch(getStream())
    }, [])

    return (
        <>
        </>
    )
}

export default Categories;