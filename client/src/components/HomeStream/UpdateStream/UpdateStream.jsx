import { useState } from "react"
import { useDispatch } from "react-redux"
import { updateStream } from "../../../store/actions/actions"
import './UpdateStream.css'


const UpdateStream = ({id}) => {
    const dispatch = useDispatch()
    const categories = ['RPG', '+18', 'Family', 'Shooter', 'Music']
    const [updateData, setUpdateData] = useState({
        title: '',
        name: '',
        description: '',
        image:'',
        category: [],
    })

    const filterArr = (arr) => {
        let arr2 = []
        arr.map( valor => {
            if(!arr2.includes(valor)) arr2.push(valor)
            else arr2.splice(arr2.indexOf(valor), 1)
        })
        return arr2
    }

    const filterCategories = filterArr(updateData.category)

    const obj = {
        title: updateData.title,
        name: updateData.name,
        description: updateData.description,
        image: updateData.image,
        category: filterCategories

    }

    console.log(obj)

    const handleSubmit = (e) => {
        dispatch(updateStream(id,obj))
        setUpdateData({
            title:'',
            name: '',
            description: '',
            category: [],
        })
    }

    return (
      <form className="update" onSubmit={handleSubmit}>
        <div className="update-input update-input-title">
          <label>Title: </label>
          <input
            type="text"
            name="title"
            autoComplete="off"
            value={updateData.title}
            onChange={(e) => {
              const expReg = /^[\s\S]{0,100}$/;
              if (expReg.test(e.target.value)) {
                setUpdateData({
                  ...updateData,
                  title: e.target.value,
                });
              }
            }}
          />
        </div>
        <div className="update-input update-input-name">
          <label>name: </label>
          <input
            type="text"
            name="name"
            autoComplete="off"
            value={updateData.name}
            onChange={(e) => {
              const expReg = /^[\s\S]{0,100}$/;
              if (expReg.test(e.target.value)) {
                setUpdateData({
                  ...updateData,
                  name: e.target.value,
                });
              }
            }}
          />
        </div>
        <div className="update-input update-input-description">
          <label>Description: </label>
          <textarea
            type="text"
            name="description"
            autoComplete="off"
            value={updateData.description}
            onChange={(e) => {
              const expReg = /^[\s\S]{0,1000}$/;
              if (expReg.test(e.target.value)) {
                setUpdateData({
                  ...updateData,
                  description: e.target.value,
                });
              }
            }}
          />
        </div>
        <div className="update-input update-input-image">
          <label>img URL: </label>
          <input
            type="url"
            name="image"
            // autoComplete="off"
            value={updateData.image}
            onChange={(e) => {
              setUpdateData({
                ...updateData,
                image: e.target.value,
              });
            }}
          />
        </div>
        <div className="update-input update-input-categories">
          <label className="card_input_title">Categories</label>
          <div>
            {categories.map((category) => (
              <div key={category}>
                <input
                  type="checkbox"
                  name="category"
                  value={category}
                  onChange={(e) => {
                    setUpdateData({
                      ...updateData,
                      category: [...updateData.category, e.target.value],
                    });
                  }}
                />
                <label className="card_input_title">{category}</label>
              </div>
            ))}
          </div>
        </div>
        <img className="image-update" src={updateData.image} alt="img" />
        <button className="update-input update-input-create">Update</button>
      </form>
    );
}

export default UpdateStream