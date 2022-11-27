import React from "react";
import {useDispatch, useSelector } from 'react-redux';
import { filterCategories } from "../../store/actions/actions";
import '../CardCategori/CardCategori.css'
    
function CardCategori(){
    const dispatch=useDispatch()
    const categories = useSelector(state => state.categories)
    const categoriesSlice=categories.slice(0,5)
    console.log(categoriesSlice)
    
    const handleCategories=(e)=>{
        e.preventDefault()
        dispatch(filterCategories(e.target.value))
    }
   
    return(
        <>
        <div className="title">
        <h2>Categorías que podrían interesarte</h2>
        </div>
        <div className="container2">
            {categoriesSlice?.map((e)=>{
                return(
                    <>
        <div class= {e.name[0]}>
            <div class="content">
            <button onClick={handleCategories} value={e.name}>{e.name}</button>
            </div>
        </div>
        </>
                )
            })}
            
             </div>
        </>
    )
}

export default CardCategori