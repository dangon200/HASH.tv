import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { postStreamId } from "../../../store/actions/actions"
import './NewStream.css'
import axios from 'axios'
import { useRef } from 'react'

const NewStream = ({id}) => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user)
    const hiddenFileInput = useRef(null);
    const hiddenFileInput2 = useRef(null);
    const categories = ['Gaming','Just Chating', 'Sports', 'Music', 'Creative']
    const [Data, setData] = useState({
        title: '',
        name: user.name,
        description: '',
        image:'',
        banner: '',
        category: [],
        Rules: '',
        Facebook: '',
        Instagram: '',
        Twitter: '',

    })
    const handleClick = event => {
      hiddenFileInput.current.click();
    };
    console.log(Data)
    const handleChange = async (e) => {
      const reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
  
      const cloudName = 'dfq27ytd2'
      const preset = 'cpnushlf'
      const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`
  
      const formData = new FormData()
      formData.append('upload_preset', preset)
      formData.append('file', e.target.files[0])
  
      const send = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      console.log(send)
      const urlImage = send.data.secure_url
      setData({
        ...Data,
        image: urlImage,
        })
    }
    const handleClick2 = event => {
      hiddenFileInput2.current.click();
    };
    const handleChange2 = async (e) => {
      const reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
  
      const cloudName = 'dfq27ytd2'
      const preset = 'cpnushlf'
      const url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`
  
      const formData2 = new FormData()
      formData2.append('upload_preset', preset)
      formData2.append('file', e.target.files[0])
  
      const send = await axios.post(url, formData2, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      console.log(send)
      const urlImage = send.data.secure_url
      setData({
        ...Data,
        banner: urlImage,
        })
    }
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
              banner: Data.banner,
              category: filterCategories,
              Facebook: Data.Facebook,
              Instagram: Data.Instagram,
              Twitter: Data.Twitter,
              Rules: Data.Rules,
          }
        dispatch(postStreamId(id,obj))
        setData({
            title:'',
            name: '',
            description: '',
            image:'',
            banner: '',
            category: [],
            Facebook: '',
            Instagram: '',
            Twitter: ''
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
        <div className="form-input form-input-description">
          <label>Description: </label>
          <input
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
          <input type='file' className="input" ref={hiddenFileInput} onChange={handleChange} />
          <div className="btn" onClick={handleClick}>Profile Picture</div>
        </div>
        <div className="form-input form-input-banner">
          <input type='file' className="input" ref={hiddenFileInput2} onChange={handleChange2} />
          <div className="btn" onClick={handleClick2}>Banner Picture</div>
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
        <div className="form-input form-input-ru">
          <label>Rules </label>
          <input
            type="text"
            name="Rules"
            autoComplete="off"
            value={Data.Rules}
            onChange={(e) => {
                setData({
                  ...Data,
                  Rules: e.target.value,
                });
            }}
          />
        </div>
        <div className="form-input form-input-ne">
          <label>Networks:</label>
          <div className="row ">
          <input 
            type="text"
            name="Facebook"
            autoComplete="off"
            placeholder="Facebook"
            value={Data.Facebook}
            onChange={(e) => {
                setData({
                  ...Data,
                  Facebook: e.target.value,
                });             
            }}
          />
          </div>
          <div className="row ">
          <input
            type="text"
            name="Instagram"
            autoComplete="off"
            placeholder="Instagram"
            value={Data.Instagram}
            onChange={(e) => {
                setData({
                  ...Data,
                  Instagram: e.target.value,
                });
              
            }}
          />
          </div>
          <div className="row ">
          <input
            type="text"
            name="Twitter"
            autoComplete="off"
            placeholder="Twitter"
            value={Data.Twitter}
            onChange={(e) => {
                setData({
                  ...Data,
                  Twitter: e.target.value,
                }); 
            }}
          />
          </div>
        </div>
        <button type="submit" className="form-input form-input-create">Create</button>
      </form>
    )
}

export default NewStream