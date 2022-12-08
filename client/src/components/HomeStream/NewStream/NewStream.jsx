import { useDispatch } from "react-redux"
import { useState } from "react"
import { postStreamId } from "../../../store/actions/actions"
import './NewStream.css'


const NewStream = ({id}) => {
    const dispatch = useDispatch()
    const categories = ['RPG', '+18', 'Family', 'Shooter', 'Music']
    const [Data, setData] = useState({
        title: '',
        name: '',
        description: '',
        image:'',
        category: [],
    })

    console.log(id,'------------id')

    const filterArr = (arr) => {
        let arr2 = []
        arr.map( valor => {
            if(!arr2.includes(valor)) arr2.push(valor)
            else arr2.splice(arr2.indexOf(valor), 1)
        })
        return arr2
    }

    const filterCategories = filterArr(Data.category)
    
    // console.log(obj)
    
    const handleSubmit = (e) => {
      e.preventDefault()
          const obj = {
              title: Data.title,
              name: Data.name,
              description: Data.description,
              image: Data.image,
              category: filterCategories
          }
        dispatch(postStreamId(id,obj))
        setData({
            title:'',
            name: '',
            description: '',
            image:'',
            category: [],
        })
    }

    return(
        <form className="form-create" onSubmit={handleSubmit}>
        <div className="form-input form-input-title">
          <label>Title: </label>
          <input
            type="text"
            name="title"
            autoComplete="off"
            value={Data.title}
            onChange={(e) => {
              const expReg = /^[\s\S]{0,100}$/;
              if (expReg.test(e.target.value)) {
                setData({
                  ...Data,
                  title: e.target.value,
                });
              }
            }}
          />
        </div>
        <div className="form-input form-input-name">
          <label>name: </label>
          <input
            type="text"
            name="name"
            autoComplete="off"
            value={Data.name}
            onChange={(e) => {
              const expReg = /^[\s\S]{0,100}$/;
              if (expReg.test(e.target.value)) {
                setData({
                  ...Data,
                  name: e.target.value,
                });
              }
            }}
          />
        </div>
        <div className="form-input form-input-description">
          <label>Description: </label>
          <textarea
            type="text"
            name="description"
            autoComplete="off"
            value={Data.description}
            onChange={(e) => {
              const expReg = /^[\s\S]{0,1000}$/;
              if (expReg.test(e.target.value)) {
                setData({
                  ...Data,
                  description: e.target.value,
                });
              }
            }}
          />
        </div>
        <div className="form-input form-input-image">
          <label>img URL: </label>
          <input
            type="url"
            name="img"
            // autoComplete="off"
            value={Data.image}
            onChange={(e) => {
              setData({
                ...Data,
                image: e.target.value,
              });
            }}
          />
        </div>
        <div className="form-input form-input-categories">
          <label>Categories</label>
          <div>
            {categories.map((category) => (
              <div key={category}>
                <input
                  type="checkbox"
                  name="category"
                  value={category}
                  onChange={(e) => {
                    setData({
                      ...Data,
                      category: [...Data.category, e.target.value],
                    });
                  }}
                />
                <label className="card_input_title">{category}</label>
              </div>
            ))}
          </div>
        </div>
        <img className="image-create" src={Data.image} alt="img" />
        <button className="form-input form-input-create">Create</button>
      </form>
    )
}

export default NewStream